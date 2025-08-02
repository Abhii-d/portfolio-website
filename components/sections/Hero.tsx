'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'Senior Software Developer',
    'Backend Specialist',
    'Node.js Expert',
    'AWS Enthusiast',
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    if (!currentTitle) return;
    
    if (displayText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [displayText, currentIndex, titles]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 pt-20">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="mb-6 animate-fade-in">
            <span className="text-2xl mb-4 block">👋</span>
            <p className="text-lg text-slate-600 font-medium">
              Hello, I'm
            </p>
          </div>

          {/* Name */}
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 animate-slide-up">
            Abhishek Dongare
          </h1>

          {/* Animated Title */}
          <div className="mb-6">
            <p className="text-xl lg:text-3xl text-primary-600 font-semibold min-h-[2.5rem] lg:min-h-[3.5rem]">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in">
            🚀 Backend specialist at{' '}
            <span className="font-semibold text-primary-600">Cimpress</span> with
            expertise in Node.js, TypeScript, and AWS technologies. Passionate
            about building scalable systems and delivering high-quality
            solutions.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">2.5+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">10+</div>
              <div className="text-sm text-slate-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900">🎯</div>
              <div className="text-sm text-slate-600">Senior Developer</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <button
              onClick={scrollToProjects}
              className="btn-primary text-lg px-8 py-3 group"
            >
              <span className="mr-2">🚀</span>
              View My Work
              <span className="ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button
              onClick={scrollToContact}
              className="btn-outline text-lg px-8 py-3 group"
            >
              <span className="mr-2">💬</span>
              Let's Talk
              <span className="ml-2 group-hover:scale-110 transition-transform">
                📧
              </span>
            </button>
          </div>

          {/* Scroll Indicator */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
