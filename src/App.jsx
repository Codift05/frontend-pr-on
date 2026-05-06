import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import SplashSlide from './slides/SplashSlide';
import CoverSlide from './slides/CoverSlide';
import TeamSlide from './slides/TeamSlide';
import WhatIsFrontend from './slides/WhatIsFrontend';
import WhyFrontend from './slides/WhyFrontend';
import EcosystemSlide from './slides/EcosystemSlide';
import ToolsSlide from './slides/ToolsSlide';
import RoadmapSlide from './slides/RoadmapSlide';
import WorkflowSlide from './slides/WorkflowSlide';
import ThankYouSlide from './slides/ThankYouSlide';

import NavigationArrows from './components/NavigationArrows';

// Wrappers for RoadmapSlide to handle internal activeStep via global navigation
const RoadmapStep1 = () => <RoadmapSlide activeStep={0} />;
RoadmapStep1.slideId = 'roadmap';
const RoadmapStep2 = () => <RoadmapSlide activeStep={1} />;
RoadmapStep2.slideId = 'roadmap';
const RoadmapStep3 = () => <RoadmapSlide activeStep={2} />;
RoadmapStep3.slideId = 'roadmap';
const RoadmapStep4 = () => <RoadmapSlide activeStep={3} />;
RoadmapStep4.slideId = 'roadmap';

const slides = [
  SplashSlide,      // 0. Intro / Splash
  CoverSlide,       // 1. Cover
  TeamSlide,        // 2. Get to Know Us
  WhatIsFrontend,   // 3. Apa itu Frontend?
  WhyFrontend,      // 4. Kenapa Frontend?
  EcosystemSlide,   // 5. Ecosystem & Stack
  ToolsSlide,       // 6. Tools Kit
  RoadmapStep1,     // 7. Roadmap Belajar (Fase 1)
  RoadmapStep2,     // 8. Roadmap Belajar (Fase 2)
  RoadmapStep3,     // 9. Roadmap Belajar (Fase 3)
  RoadmapStep4,     // 10. Roadmap Belajar (Fase 4)
  WorkflowSlide,    // 11. Workflow GitHub
  ThankYouSlide,    // 12. Thank You Slide (Replaces QA/Resources)
];

const slideVariants = {
  enter: () => ({
    opacity: 0,
    scale: 1.04,
    filter: 'blur(8px)',
  }),
  center: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  exit: () => ({
    opacity: 0,
    scale: 0.97,
    filter: 'blur(6px)',
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1],
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
  const slideAnimationKey = CurrentSlideComponent.slideId || currentSlide;

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-noir-black">
      {/* Slide Content */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slideAnimationKey}
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
                ? 'bg-unsrat-blue scale-125 shadow-[0_0_10px_rgba(91,142,194,0.5)]'
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
