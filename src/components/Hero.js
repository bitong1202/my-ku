import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/photos/xishuihu.jpg',
      title: '广东药科大学',
      subtitle: '传承医药文化，培养创新人才',
      description: '致力于培养高素质医药人才，服务健康中国建设'
    },
    {
      image: '/photos/26f367e89ea76a6a6eed82c0fd3f9a8.jpg',
      title: '学术卓越',
      subtitle: '追求学术卓越，引领医药发展',
      description: '以学科建设为龙头，以人才培养为中心'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">{slide.title}</h1>
                <h2 className="hero-subtitle">{slide.subtitle}</h2>
                <p className="hero-description">{slide.description}</p>
                <div className="hero-buttons">
                  <button onClick={() => window.location.href = '/about'} className="btn btn-primary">了解更多</button>
                  <button onClick={() => document.getElementById('admission')?.scrollIntoView({ behavior: 'smooth' })} className="btn btn-secondary">招生信息</button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button className="hero-nav hero-prev" onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className="hero-nav hero-next" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        <div className="hero-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
