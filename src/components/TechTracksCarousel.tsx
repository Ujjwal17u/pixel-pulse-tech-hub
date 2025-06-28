
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TechTracksCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollRef = useRef<NodeJS.Timeout>();

  const techTracks = [
    {
      title: 'Web3',
      subtitle: 'Blockchain & Decentralized Tech',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop&auto=format',
      gradient: 'from-orange-500/20 to-orange-600/10'
    },
    {
      title: 'AI',
      subtitle: 'Artificial Intelligence & ML',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=600&fit=crop&auto=format',
      gradient: 'from-tech-orange/20 to-tech-cyan/10'
    },
    {
      title: 'HealthTech',
      subtitle: 'Healthcare Innovation',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=600&fit=crop&auto=format',
      gradient: 'from-cyan-500/20 to-orange-500/10'
    },
    {
      title: 'EdTech',
      subtitle: 'Educational Technology',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=600&fit=crop&auto=format',
      gradient: 'from-tech-orange/20 to-purple-500/10'
    },
    {
      title: 'FinTech',
      subtitle: 'Financial Technology',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop&auto=format',
      gradient: 'from-green-500/20 to-tech-orange/10'
    },
    {
      title: 'Web Development',
      subtitle: 'Frontend & Backend Engineering',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=600&fit=crop&auto=format',
      gradient: 'from-blue-500/20 to-tech-orange/10'
    },
    {
      title: 'Data Science',
      subtitle: 'Data Analysis & Machine Learning',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop&auto=format',
      gradient: 'from-purple-500/20 to-tech-orange/10'
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('tech-tracks-carousel');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isVisible) return;

    const startAutoScroll = () => {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % techTracks.length);
      }, 4000);
    };

    const timer = setTimeout(startAutoScroll, 1000);

    return () => {
      clearTimeout(timer);
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isVisible, techTracks.length]);

  const nextSlide = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    setCurrentIndex((prev) => (prev + 1) % techTracks.length);
  };

  const prevSlide = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current);
    }
    setCurrentIndex((prev) => (prev - 1 + techTracks.length) % techTracks.length);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < techTracks.length; i++) {
      const index = (currentIndex + i) % techTracks.length;
      cards.push(techTracks[index]);
    }
    return cards;
  };

  return (
    <section id="tech-tracks-carousel" className="py-20 px-4 bg-[#0F0F0F] relative overflow-hidden">
      {/* Background Tech Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-tech-orange text-4xl">+</div>
        <div className="absolute top-20 right-20 text-tech-orange text-3xl">◆</div>
        <div className="absolute bottom-20 left-20 text-tech-orange text-2xl">⚡</div>
        <div className="absolute bottom-10 right-10 text-tech-orange text-4xl">●</div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Title */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-primary text-5xl md:text-6xl font-bold text-[#FF6A00] mb-4 tech-text-glow">
            TECH TRACKS
          </h2>
          <p className="text-xl text-tech-gray font-body max-w-2xl mx-auto">
            Explore cutting-edge technology domains and find your passion
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-tech-dark/80 border border-tech-orange/30 rounded-full p-3 text-tech-orange hover:bg-tech-orange hover:text-black transition-all duration-300 tech-glow-cyan"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-tech-dark/80 border border-tech-orange/30 rounded-full p-3 text-tech-orange hover:bg-tech-orange hover:text-black transition-all duration-300 tech-glow-cyan"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Cards Carousel */}
          <div className="overflow-hidden mx-8">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / Math.min(techTracks.length, 4))}%)`,
                width: `${techTracks.length * (100 / Math.min(techTracks.length, 4))}%`
              }}
            >
              {techTracks.map((track, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 px-3 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ 
                    width: `${100 / Math.min(techTracks.length, 4)}%`,
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="group relative bg-tech-dark/60 rounded-2xl border border-[#FF6A00]/30 overflow-hidden h-96 cursor-pointer transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 tech-glow hover:border-[#FF6A00]">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                      <img 
                        src={track.image}
                        alt={track.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-b ${track.gradient} group-hover:opacity-80 transition-opacity duration-300`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-end p-6">
                      <div className="text-center">
                        <h3 className="font-primary text-2xl font-bold text-[#FF6A00] mb-2 tech-text-glow group-hover:text-white transition-colors duration-300">
                          {track.title}  
                        </h3>
                        <p className="text-tech-gray font-body text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {track.subtitle}
                        </p>
                      </div>

                      {/* Tech Accent Line */}
                      <div className="flex justify-center mt-4 space-x-1">
                        <div className="w-8 h-0.5 bg-[#FF6A00] opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="w-4 h-0.5 bg-tech-cyan opacity-40 group-hover:opacity-80 transition-opacity duration-300"></div>
                        <div className="w-2 h-0.5 bg-[#FF6A00] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Corner Tech Elements */}
                    <div className="absolute top-3 left-3 text-[#FF6A00] text-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300">+</div>
                    <div className="absolute top-3 right-3 text-tech-cyan text-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300">◆</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {techTracks.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? 'bg-[#FF6A00] tech-glow' 
                    : 'bg-tech-gray/30 hover:bg-tech-gray/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechTracksCarousel;
