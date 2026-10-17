import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Maximize2, X, Image as ImageIcon, MapPin, Calendar, Tag } from 'lucide-react';

export interface DashboardGalleryImage {
  id: string;
  title: string;
  subtitle?: string;
  location?: string;
  category?: string;
  date?: string;
  url: string;
}

interface DashboardImageCarouselProps {
  images: DashboardGalleryImage[];
  autoPlayInterval?: number; // default 4500ms
  className?: string;
  title?: string;
}

export function DashboardImageCarousel({
  images,
  autoPlayInterval = 4500,
  className = '',
  title = 'Dokumentasi Visual Lapangan',
}: DashboardImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);
  const [lightboxImage, setLightboxImage] = useState<DashboardGalleryImage | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Determine how many images to display based on screen width
  const updateVisibleCount = useCallback(() => {
    if (typeof window === 'undefined') return;
    const width = window.innerWidth;
    if (width < 640) {
      setVisibleCount(1); // 1 image on mobile
    } else if (width < 1024) {
      setVisibleCount(2); // 2 images on tablet
    } else {
      setVisibleCount(3); // 3 images on desktop / wide
    }
  }, []);

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, [updateVisibleCount]);

  const maxIndex = Math.max(0, images.length - visibleCount);

  // Clamp current index if visibleCount changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, images.length - visibleCount)));
  }, [visibleCount, images.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay timer
  useEffect(() => {
    if (images.length <= visibleCount || isPaused || isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [images.length, visibleCount, isPaused, isHovered, autoPlayInterval, handleNext]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    setTouchStartX(null);
  };

  const totalPages = maxIndex + 1;

  return (
    <div
      className={`card p-4 sm:p-5 mb-6 border-mangrove-100 bg-white/95 shadow-sm overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Header with Navigation Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-mangrove-100 flex items-center justify-center text-mangrove-700">
            <ImageIcon className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-semibold text-mangrove-900 text-sm sm:text-base flex items-center gap-2">
              {title}
              <span className="text-xs px-2 py-0.5 rounded-full bg-mangrove-50 text-mangrove-700 font-normal border border-mangrove-100">
                {images.length} Foto
              </span>
            </h3>
            <p className="text-xs text-mangrove-400">
              Menampilkan {visibleCount} dari {images.length} dokumentasi kegiatan
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 ml-auto">
          {/* Play / Pause toggle */}
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? 'Lanjutkan Auto-Slide' : 'Jeda Auto-Slide'}
            className="p-1.5 rounded-lg border border-mangrove-200 text-mangrove-600 hover:bg-mangrove-50 transition-colors"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>

          {/* Navigation Prev / Next buttons */}
          <div className="flex items-center gap-1 bg-mangrove-50 p-0.5 rounded-xl border border-mangrove-100">
            <button
              type="button"
              onClick={handlePrev}
              title="Foto Sebelumnya"
              className="p-1.5 rounded-lg text-mangrove-700 hover:bg-white hover:shadow-xs transition-all active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-semibold px-2 text-mangrove-700 select-none">
              {currentIndex + 1} / {totalPages}
            </span>
            <button
              type="button"
              onClick={handleNext}
              title="Foto Berikutnya"
              className="p-1.5 rounded-lg text-mangrove-700 hover:bg-white hover:shadow-xs transition-all active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track Container */}
      <div
        className="relative overflow-hidden rounded-xl touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {images.map((item, idx) => (
            <div
              key={item.id || idx}
              className="flex-shrink-0 px-1.5 sm:px-2"
              style={{ width: `${100 / visibleCount}%` }}
            >
              {/* 16:9 Image Box */}
              <div
                onClick={() => setLightboxImage(item)}
                className="group relative aspect-video w-full overflow-hidden rounded-xl bg-mangrove-900 shadow-xs border border-mangrove-100/70 cursor-pointer select-none"
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                />

                {/* Gradient Overlay for Text Legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5 group-hover:from-black/90 transition-all duration-300" />

                {/* Top Badge Overlay */}
                <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between gap-2">
                  {/* {item.category && (
                    <span className="badge bg-black/40 backdrop-blur-md text-white/90 border border-white/20 text-[10px] sm:text-xs font-medium px-2 py-0.5">
                      <Tag className="w-3 h-3 text-mangrove-300 inline mr-1" />
                      {item.category}
                    </span>
                  )} */}
                  <span className="p-1 rounded-md bg-black/40 backdrop-blur-md text-white/80 opacity-0 group-hover:opacity-100 transition-opacity ml-auto">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-3.5 text-white">
                  <h4 className="font-semibold text-xs sm:text-sm line-clamp-1 group-hover:text-mangrove-200 transition-colors">
                    {item.title}
                  </h4>
                  {(item.location || item.date) && (
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-white/75">
                      {item.location && (
                        <span className="flex items-center gap-1 line-clamp-1">
                          <MapPin className="w-3 h-3 text-mangrove-300 flex-shrink-0" />
                          {item.location}
                        </span>
                      )}
                      {/* 
                      {item.location && item.date && <span>•</span>}
                      {item.date && (
                        <span className="flex items-center gap-1 flex-shrink-0">
                          <Calendar className="w-3 h-3 text-mangrove-300" />
                          {item.date}
                        </span>
                      )} */}
                    </div>
                  )}
                  {/* {item.subtitle && (
                    <p className="text-[11px] text-white/70 line-clamp-1 mt-0.5 hidden sm:block">
                      {item.subtitle}
                    </p>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dot Indicators */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-3 pt-1">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              title={`Halaman ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? 'w-6 bg-mangrove-600'
                  : 'w-1.5 bg-mangrove-200 hover:bg-mangrove-300'
              }`}
            />
          ))}
        </div>
      )}

      {/* Lightbox / Zoom Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-mangrove-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightboxImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/60 text-white/90 hover:bg-black/90 transition-all hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            {/* 16:9 Lightbox Image */}
            <div className="relative aspect-video w-full bg-black">
              <img
                src={lightboxImage.url}
                alt={lightboxImage.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Lightbox Details */}
            <div className="p-4 sm:p-5 bg-mangrove-900 text-white">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                {lightboxImage.category && (
                  <span className="badge bg-mangrove-700/60 text-mangrove-200 border border-mangrove-600/40 text-xs">
                    {lightboxImage.category}
                  </span>
                )}
                {lightboxImage.location && (
                  <span className="flex items-center gap-1 text-xs text-mangrove-300">
                    <MapPin className="w-3.5 h-3.5" />
                    {lightboxImage.location}
                  </span>
                )}
                {lightboxImage.date && (
                  <span className="flex items-center gap-1 text-xs text-mangrove-300">
                    <Calendar className="w-3.5 h-3.5" />
                    {lightboxImage.date}
                  </span>
                )}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold">{lightboxImage.title}</h3>
              {lightboxImage.subtitle && (
                <p className="text-sm text-mangrove-200 mt-1 leading-relaxed">
                  {lightboxImage.subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
