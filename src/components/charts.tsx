import { useEffect, useState, useRef, Fragment } from 'react';

// Animated counter that counts up to a value
export function CountUp({ value, duration = 1200, decimals = 0, suffix = '', prefix = '' }: {
  value: number; duration?: number; decimals?: number; suffix?: string; prefix?: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString('id-ID', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}
    </span>
  );
}

// Gauge Chart - circular progress
export function GaugeChart({ value, max, label, unit, color = '#236a4e', size = 180 }: {
  value: number; max: number; label?: string; unit?: string; color?: string; size?: number;
}) {
  const percent = Math.min((value / max) * 100, 100);
  const radius = size / 2 - 20;
  const circumference = 2 * Math.PI * radius;
  const [animatedPercent, setAnimatedPercent] = useState(0);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setAnimatedPercent(percent), 100);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percent]);

  const offset = circumference - (animatedPercent / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg ref={ref} width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e5e7eb" strokeWidth="14" />
          <circle
            cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth="14"
            strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={offset}
            style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="stat-number text-3xl text-mangrove-900">
            <CountUp value={value} decimals={value % 1 !== 0 ? 2 : 0} />
          </span>
          {unit && <span className="text-xs text-mangrove-500 font-medium mt-0.5">{unit}</span>}
        </div>
      </div>
      {label && <p className="text-sm font-medium text-mangrove-600 mt-3 text-center">{label}</p>}
    </div>
  );
}

// Donut Chart
export function DonutChart({ data, size = 200, thickness = 28 }: {
  data: { label: string; value: number; percent: number; color: string }[];
  size?: number; thickness?: number;
}) {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const [animated, setAnimated] = useState(false);
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setAnimated(true), 100);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let cumulative = 0;
  const total = data.reduce((s, d) => s + d.value, 0);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg ref={ref} width={size} height={size} className="-rotate-90">
          <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#f0f7f4" strokeWidth={thickness} />
          {data.map((d, i) => {
            const dash = (d.value / total) * circumference;
            const gap = circumference - dash;
            const rotation = (cumulative / total) * circumference;
            cumulative += d.value;
            return (
              <circle
                key={i}
                cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={d.color} strokeWidth={thickness}
                strokeDasharray={animated ? `${dash} ${gap}` : `0 ${circumference}`}
                strokeDashoffset={-rotation}
                style={{ transition: `stroke-dasharray 1s ease-out ${i * 0.2}s` }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="stat-number text-3xl text-mangrove-900">
            <CountUp value={total} />
          </span>
          <span className="text-xs text-mangrove-500 font-medium">Total</span>
        </div>
      </div>
      <div className="space-y-3 w-full">
        {data.map((d, i) => (
          <div key={i} className="flex items-center justify-between gap-4 group">
            <div className="flex items-center gap-2.5">
              <div className="w-3.5 h-3.5 rounded-full shrink-0 transition-transform group-hover:scale-125" style={{ background: d.color }} />
              <span className="text-sm font-medium text-mangrove-700">{d.label}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-bold text-mangrove-900">{d.value}</span>
              <span className="text-mangrove-400">({d.percent}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Bar Chart (vertical grouped)
export function BarChart({ data, height = 220 }: {
  data: { label: string; bars: { value: number; color: string; name: string }[] }[];
  height?: number;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const maxValue = Math.max(...data.flatMap(d => d.bars.map(b => b.value)));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setAnimated(true), 100);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-end justify-around gap-4 px-2" style={{ height }}>
        {data.map((d, i) => (
          <div key={i} className="flex flex-col items-center gap-2 flex-1 max-w-[120px]">
            <div className="flex items-end justify-center gap-1.5 w-full" style={{ height: height - 40 }}>
              {d.bars.map((bar, j) => (
                <div key={j} className="relative group flex-1 max-w-[36px]">
                  <div
                    className="w-full rounded-t-md transition-all duration-1000 ease-out hover:opacity-80"
                    style={{
                      height: animated ? `${(bar.value / maxValue) * (height - 40)}px` : '0px',
                      background: bar.color,
                      transitionDelay: `${i * 0.1 + j * 0.05}s`,
                    }}
                  >
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-mangrove-900 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap pointer-events-none z-10">
                      {bar.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <span className="text-xs font-medium text-mangrove-600 text-center">{d.label}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 pt-3 border-t border-mangrove-100">
        {data[0]?.bars.map((bar, j) => (
          <div key={j} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ background: bar.color }} />
            <span className="text-xs font-medium text-mangrove-600">{bar.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Horizontal Bar Chart
export function HorizontalBarChart({ data, height = 260 }: {
  data: { label: string; value: number; color?: string; extra?: string }[];
  height?: number;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const maxValue = Math.max(...data.map(d => d.value));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setAnimated(true), 100);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-4" style={{ height }}>
      {data.map((d, i) => (
        <div key={i} className="group">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm font-medium text-mangrove-700">{d.label}</span>
            <div className="flex items-center gap-2">
              {d.extra && <span className="text-xs text-mangrove-400">{d.extra}</span>}
              <span className="text-sm font-bold text-mangrove-900">{d.value}</span>
            </div>
          </div>
          <div className="h-3 rounded-full bg-mangrove-50 overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-1000 ease-out group-hover:opacity-80"
              style={{
                width: animated ? `${(d.value / maxValue) * 100}%` : '0%',
                background: d.color || '#236a4e',
                transitionDelay: `${i * 0.1}s`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// Stacked Column Chart
export function StackedColumnChart({ data, height = 240 }: {
  data: { label: string; segments: { value: number; color: string; name: string }[] }[];
  height?: number;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const maxValue = Math.max(...data.map(d => d.segments.reduce((s, seg) => s + seg.value, 0)));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setAnimated(true), 100);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="flex items-end justify-around gap-8 px-2" style={{ height }}>
        {data.map((d, i) => {
          const total = d.segments.reduce((s, seg) => s + seg.value, 0);
          return (
            <div key={i} className="flex flex-col items-center gap-2 flex-1 max-w-[140px]">
              <div className="text-sm font-bold text-mangrove-900">
                <CountUp value={total} />
              </div>
              <div className="w-full max-w-[60px] flex flex-col-reverse rounded-lg overflow-hidden" style={{ height: height - 60 }}>
                {d.segments.map((seg, j) => (
                  <div
                    key={j}
                    className="w-full transition-all duration-1000 ease-out group relative"
                    style={{
                      height: animated ? `${(seg.value / maxValue) * (height - 60)}px` : '0px',
                      background: seg.color,
                      transitionDelay: `${i * 0.15 + j * 0.1}s`,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-xs font-bold text-white">{seg.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <span className="text-xs font-medium text-mangrove-600 text-center">{d.label}</span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 mt-4 pt-3 border-t border-mangrove-100">
        {data[0]?.segments.map((seg, j) => (
          <div key={j} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm" style={{ background: seg.color }} />
            <span className="text-xs font-medium text-mangrove-600">{seg.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Progress Bar (horizontal)
export function ProgressBar({ value, max, label, color = '#236a4e', unit = '', showValue = true }: {
  value: number; max: number; label?: string; color?: string; unit?: string; showValue?: boolean;
}) {
  const percent = Math.min((value / max) * 100, 100);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setAnimated(true), 100);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {label && (
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-mangrove-700">{label}</span>
          {showValue && (
            <span className="text-sm font-bold text-mangrove-900">
              {value}{unit} / {max}{unit} <span className="text-mangrove-400">({percent.toFixed(2)}%)</span>
            </span>
          )}
        </div>
      )}
      <div className="h-4 rounded-full bg-mangrove-50 overflow-hidden relative">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: animated ? `${percent}%` : '0%', background: color }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
}

// Stat Card
export function StatCard({ label, value, unit, icon, color = 'mangrove', detail, trend }: {
  label: string; value: number; unit: string; icon: React.ReactNode; color?: string;
  detail?: string; trend?: string;
}) {
  const colorMap: Record<string, string> = {
    mangrove: 'from-mangrove-500 to-mangrove-700',
    lagoon: 'from-lagoon-500 to-lagoon-700',
    sand: 'from-sand-500 to-sand-600',
    clay: 'from-clay-500 to-clay-600',
    success: 'from-success-500 to-success-700',
    warning: 'from-warning-500 to-warning-600',
    error: 'from-error-500 to-error-600',
  };

  return (
    <div className="card card-hover p-5 group">
      <div className="flex items-start justify-between">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorMap[color]} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        {trend && (
          <span className="badge bg-mangrove-50 text-mangrove-600">{trend}</span>
        )}
      </div>
      <div className="mt-4">
        <div className="stat-number text-3xl text-mangrove-900">
          <CountUp value={value} decimals={value % 1 !== 0 ? 2 : 0} />
          <span className="text-lg text-mangrove-500 ml-1">{unit}</span>
        </div>
        <p className="text-sm font-medium text-mangrove-600 mt-1">{label}</p>
        {detail && <p className="text-xs text-mangrove-400 mt-2">{detail}</p>}
      </div>
    </div>
  );
}

// Pie Chart
export function PieChart({ data, size = 180 }: {
  data: { label: string; value: number; color: string; percent: number }[];
  size?: number;
}) {
  const radius = size / 2;
  const innerRadius = radius * 0.55;
  const [animated, setAnimated] = useState(false);
  const ref = useRef<SVGSVGElement>(null);
  const total = data.reduce((s, d) => s + d.value, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setAnimated(true), 100);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  let cumulative = 0;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-6">
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg ref={ref} width={size} height={size} className="-rotate-90">
          {data.map((d, i) => {
            const angle = (d.value / total) * 360;
            const startAngle = (cumulative / total) * 360;
            cumulative += d.value;
            const startRad = (startAngle * Math.PI) / 180;
            const endRad = ((startAngle + angle) * Math.PI) / 180;
            const x1 = radius + radius * Math.cos(startRad);
            const y1 = radius + radius * Math.sin(startRad);
            const x2 = radius + radius * Math.cos(endRad);
            const y2 = radius + radius * Math.sin(endRad);
            const largeArc = angle > 180 ? 1 : 0;
            const x1i = radius + innerRadius * Math.cos(startRad);
            const y1i = radius + innerRadius * Math.sin(startRad);
            const x2i = radius + innerRadius * Math.cos(endRad);
            const y2i = radius + innerRadius * Math.sin(endRad);
            const path = `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x2i} ${y2i} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1i} ${y1i} Z`;
            return (
              <path
                key={i} d={path} fill={d.color}
                style={{ opacity: animated ? 1 : 0, transition: `opacity 0.5s ease-out ${i * 0.15}s` }}
                className="hover:opacity-80 transition-opacity"
              />
            );
          })}
        </svg>
      </div>
      <div className="space-y-2.5 w-full">
        {data.map((d, i) => (
          <div key={i} className="flex items-center justify-between gap-4 group">
            <div className="flex items-center gap-2.5">
              <div className="w-3 h-3 rounded-sm transition-transform group-hover:scale-125" style={{ background: d.color }} />
              <span className="text-sm font-medium text-mangrove-700">{d.label}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-mangrove-900 text-sm">{d.value}</span>
              <span className="text-mangrove-400 text-xs">({d.percent}%)</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Bullet Chart (target vs actual)
export function BulletChart({ target, actual, label, unit = '', color = '#236a4e' }: {
  target: number; actual: number; label: string; unit?: string; color?: string;
}) {
  const percent = Math.min((actual / target) * 100, 100);
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setAnimated(true), 100);
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-mangrove-700">{label}</span>
        <span className="text-lg font-bold text-mangrove-900">
          {actual}{unit} <span className="text-sm text-mangrove-400">/ {target}{unit}</span>
        </span>
      </div>
      <div className="relative h-8 rounded-lg bg-mangrove-50 overflow-hidden">
        <div className="absolute top-0 bottom-0 w-1 bg-error-400 opacity-50" style={{ left: '100%', transform: 'translateX(-100%)' }} />
        <div
          className="h-full rounded-lg transition-all duration-1000 ease-out flex items-center justify-end pr-3"
          style={{ width: animated ? `${percent}%` : '0%', background: color }}
        >
          <span className="text-xs font-bold text-white whitespace-nowrap">{percent.toFixed(2)}%</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs text-mangrove-400">
        <span>Capaian: {actual}{unit}</span>
        <span>Target: {target}{unit}</span>
      </div>
    </div>
  );
}

// Heatmap grid
export function HeatmapGrid({ data, rowsLabel, colsLabel }: {
  data: { row: number; col: number; value: number }[];
  rowsLabel: string[];
  colsLabel: string[];
}) {
  const maxVal = Math.max(...data.map(d => d.value));
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setTimeout(() => setAnimated(true), 100);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getColor = (val: number) => {
    const intensity = val / maxVal;
    if (intensity > 0.75) return '#13372b';
    if (intensity > 0.5) return '#358463';
    if (intensity > 0.25) return '#86c2a8';
    if (intensity > 0) return '#dbede4';
    return '#f0f7f4';
  };

  return (
    <div ref={ref} className="overflow-x-auto">
      <div className="inline-grid gap-1" style={{ gridTemplateColumns: `auto repeat(${colsLabel.length}, 1fr)` }}>
        <div></div>
        {colsLabel.map((cl, i) => (
          <div key={i} className="text-xs font-medium text-mangrove-500 text-center px-2 pb-1">{cl}</div>
        ))}
        {rowsLabel.map((rl, r) => (
          <Fragment key={`row${r}`}>
            <div className="text-xs font-medium text-mangrove-500 pr-2 flex items-center">{rl}</div>
            {colsLabel.map((_, c) => {
              const cell = data.find(d => d.row === r && d.col === c);
              return (
                <div
                  key={`c${r}-${c}`}
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-700 hover:scale-110 cursor-pointer"
                  style={{
                    background: cell ? getColor(cell.value) : '#f0f7f4',
                    color: cell && cell.value / maxVal > 0.5 ? 'white' : '#236a4e',
                    opacity: animated ? 1 : 0,
                    transitionDelay: `${(r * colsLabel.length + c) * 0.03}s`,
                  }}
                  title={cell ? `${rl} - ${colsLabel[c]}: ${cell.value} patroli` : ''}
                >
                  {cell?.value || ''}
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
