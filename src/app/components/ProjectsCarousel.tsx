'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    type: 'red-card',
    title: 'AR 3D Design Concept',
    description: 'AR creation with 3D design to solve problems with.',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/web.jpg',
    alt: 'Design Project',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/brand.jpg',
    alt: 'Creative Design',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/mobile.jpg',
    alt: 'Mobile App',
  },
];

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Calculate how many cards to show based on screen size
  const getCardsToShow = () => {
    if (typeof window === 'undefined') return 1;
    if (window.innerWidth >= 1024) return 4; // lg: show 4 cards
    if (window.innerWidth >= 768) return 2; // md: show 2 cards
    return 1; // mobile: show 1 card
  };

  // Update cards to show on mount and resize
  useEffect(() => {
    const updateCardsToShow = () => {
      setCardsToShow(getCardsToShow());
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsToShow);

  // Update currentIndex when cardsToShow changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [cardsToShow, maxIndex, currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const max = Math.max(0, projects.length - cardsToShow);
        return prev >= max ? 0 : prev + 1;
      });
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, cardsToShow]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    setIsAutoPlaying(false);
  };

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${Math.min(currentIndex, maxIndex) * (100 / cardsToShow)}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-full md:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(25%-1.125rem)] aspect-[4/5] flex-shrink-0 md:mr-6 lg:mr-6 last:mr-0"
            >
              {project.type === 'red-card' ? (
                <div
                  className="relative h-full rounded-2xl overflow-hidden"
                  style={{ backgroundColor: '#ff0000' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <div className="w-full h-full bg-white/10 rounded-lg flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-4xl">3D</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4 m-4 rounded-xl">
                    <h3 className="font-bold text-neutral-900 mb-1">
                      • {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {project.description}
                    </p>
                  </div>
                  <button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white flex items-center justify-center text-neutral-900 hover:opacity-80 transition-opacity">
                    ×
                  </button>
                </div>
              ) : (
                <div className="relative h-full rounded-2xl overflow-hidden bg-neutral-100">
                  <Image
                    src={project.src!}
                    alt={project.alt!}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {currentIndex > 0 && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-neutral-900 transition-all hover:scale-110 z-10"
          aria-label="Previous slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      )}
      {currentIndex < maxIndex && (
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-neutral-900 transition-all hover:scale-110 z-10"
          aria-label="Next slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      )}

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-[#ff0000]'
                : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
