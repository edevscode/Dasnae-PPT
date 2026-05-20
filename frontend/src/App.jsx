import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import Navigation from './components/Navigation';
import BackgroundDecor from './components/BackgroundDecor';
import Slide01Title from './slides/Slide01Title';
import Slide02Overview from './slides/Slide02Overview';
import Slide03Background from './slides/Slide03Background';
import Slide04Problem from './slides/Slide04Problem';
import Slide05Objectives from './slides/Slide05Objectives';
import Slide06Personas from './slides/Slide06Personas';
import Slide07TaskAnalysis from './slides/Slide07TaskAnalysis';
import Slide08Prototype from './slides/Slide08Prototype';
import Slide09Principles from './slides/Slide09Principles';
import Slide10Testing from './slides/Slide10Testing';
import Slide11Results from './slides/Slide11Results';
import Slide12Heuristic from './slides/Slide12Heuristic';
import Slide13Accessibility from './slides/Slide13Accessibility';
import Slide14Findings from './slides/Slide14Findings';
import Slide15Conclusion from './slides/Slide15Conclusion';
import Slide16ThankYou from './slides/Slide16ThankYou';

const SLIDE_W = 960;
const SLIDE_H = 540;
const NAV_H = 60;

const slides = [
  Slide01Title, Slide02Overview, Slide03Background, Slide04Problem,
  Slide05Objectives, Slide06Personas, Slide07TaskAnalysis, Slide08Prototype,
  Slide09Principles, Slide10Testing, Slide11Results, Slide12Heuristic,
  Slide13Accessibility, Slide14Findings, Slide15Conclusion, Slide16ThankYou
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scale, setScale] = useState(1);
  const [slideH, setSlideH] = useState(SLIDE_H);
  const innerRef = useRef(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Measure the active slide's actual rendered height, then compute scale.
  // useLayoutEffect runs before paint so there's no visible flash.
  useLayoutEffect(() => {
    const compute = () => {
      if (!innerRef.current) return;
      const h = Math.max(innerRef.current.scrollHeight, SLIDE_H);
      const s = Math.min(
        window.innerWidth / SLIDE_W,
        (window.innerHeight - NAV_H) / h
      );
      setSlideH(h);
      setScale(s);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="presentation-container">
      <BackgroundDecor />
      {/* Outer div is sized to the post-scale visible dimensions */}
      <div style={{ width: SLIDE_W * scale, height: slideH * scale, position: 'relative', overflow: 'hidden' }}>
        {/* Inner div renders at natural size; transform scales it to fit */}
        <div
          ref={innerRef}
          style={{
            width: SLIDE_W,
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          {slides.map((Slide, index) => (
            <div key={index} className={`slide-wrapper ${index === currentSlide ? 'active' : ''}`}>
              <Slide />
            </div>
          ))}
        </div>
      </div>
      <Navigation
        current={currentSlide + 1}
        total={slides.length}
        onNext={nextSlide}
        onPrev={prevSlide}
      />
    </div>
  );
}

export default App;
