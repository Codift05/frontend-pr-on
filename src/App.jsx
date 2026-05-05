import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import CoverSlide from './slides/CoverSlide';
import TeamSlide from './slides/TeamSlide';
import VisiMisiSlide from './slides/VisiMisiSlide';
import WhatIsFrontend from './slides/WhatIsFrontend';
import WhyFrontend from './slides/WhyFrontend';
import EcosystemSlide from './slides/EcosystemSlide';
import ToolsSlide from './slides/ToolsSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import WorkflowSlide from './slides/WorkflowSlide';
import ResourcesSlide from './slides/ResourcesSlide';
import QASlide from './slides/QASlide';

import SlideIndicator from './components/SlideIndicator';
import NavigationArrows from './components/NavigationArrows';

const slides = [
  CoverSlide,       // 1. Cover
  TeamSlide,        // 2. Get to Know Us
  VisiMisiSlide,    // 3. Visi & Misi
  WhatIsFrontend,   // 4. Apa itu Frontend?
  WhyFrontend,      // 5. Kenapa Frontend?
  EcosystemSlide,   // 6. Ecosystem & Stack
  ToolsSlide,       // 7. Tools Kit
  RoadmapSlide,     // 8. Roadmap Belajar
  WorkflowSlide,    // 9. Workflow GitHub
  ResourcesSlide,   // 10. Resources
  QASlide,          // 11. Q&A
];

const slideVariants = {
  enter: (direction) => ({
    opacity: 0,
    y: direction > 0 ? 60 : -60,
    scale: 0.96,
  }),
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction) => ({
    opacity: 0,
    y: direction > 0 ? -60 : 60,
    scale: 0.96,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((index) => {
    if (index < 0 || index >= slides.length) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  }, [currentSlide]);

  const goNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide((prev) => prev + 1);
    }
  }, [currentSlide]);

  const goPrev = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide((prev) => prev - 1);
    }
  }, [currentSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        goNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-noir-black">
      {/* Slide Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <CurrentSlideComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation UI */}
      <SlideIndicator current={currentSlide} total={slides.length} />
      <NavigationArrows
        onPrev={goPrev}
        onNext={goNext}
        current={currentSlide}
        total={slides.length}
      />

      {/* Slide dot indicators at right edge */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentSlide
                ? 'bg-neon-lime scale-125 shadow-[0_0_10px_rgba(204,255,0,0.5)]'
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
