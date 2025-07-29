import React, { useEffect, useRef } from 'react';

// Default testimonials data
const defaultTestimonials = [
  {
    quote: '"Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."',
    name: 'Maria Jones',
    title: 'CEO, XYZ Inc.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: '"Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque mauris."',
    name: 'Robert Fox',
    title: 'CMO, ZYX Group',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    quote: '"Integer convallis volutpat dui quis scelerisque. Donec vitae odio quis nisl dapibus malesuada. Vestibulum ante ipsum primis in faucibus orci luctus."',
    name: 'Kristin Watson',
    title: 'Founder, ABC Corp',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
];

// Hook for Swiper initialization
const useSwiper = (swiperRef, config = {}) => {
  const swiperInstance = useRef(null);

  useEffect(() => {
    let swiperCSS, swiperScript;

    const initSwiper = () => {
      // Load Swiper CSS
      swiperCSS = document.createElement('link');
      swiperCSS.rel = 'stylesheet';
      swiperCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css';
      document.head.appendChild(swiperCSS);

      // Load Swiper JS
      swiperScript = document.createElement('script');
      swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js';
      swiperScript.onload = () => {
        if (window.Swiper && swiperRef.current) {
          const defaultConfig = {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 0,
            loop: false, // Tắt loop để tránh animation lạ
            autoHeight: false,
            centeredSlides: true,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
            },
            speed: 600,
            effect: 'slide',
            allowTouchMove: true,
            resistanceRatio: 0.85,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              dynamicBullets: false,
            },
            on: {
              slideChange: function () {
                console.log('Slide changed to:', this.activeIndex);
              },
              reachEnd: function() {
                // Khi đến slide cuối, tự động quay về slide đầu
                if (this.autoplay && this.autoplay.running) {
                  setTimeout(() => {
                    this.slideTo(0, this.params.speed);
                  }, this.params.autoplay.delay);
                }
              }
            }
          };

          swiperInstance.current = new window.Swiper(swiperRef.current, {
            ...defaultConfig,
            ...config
          });
        }
      };
      document.head.appendChild(swiperScript);
    };

    initSwiper();

    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }
      if (swiperCSS && document.head.contains(swiperCSS)) {
        document.head.removeChild(swiperCSS);
      }
      if (swiperScript && document.head.contains(swiperScript)) {
        document.head.removeChild(swiperScript);
      }
    };
  }, []);

  return swiperInstance.current;
};

// Testimonial Slide Component
const TestimonialSlide = ({ testimonial }) => (
  <div className="swiper-slide">
    <div className="testimonial-content">
      <blockquote>
        <p>{testimonial.quote}</p>
      </blockquote>
      <div className="testimonial-author">
        <div className="avatar-wrapper">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
          />
        </div>
        <h5 className="author-name">{testimonial.name}</h5>
        <span className="author-title">{testimonial.title}</span>
      </div>
    </div>
  </div>
);

// Main TestimonialSlider Component
const TestimonialSlider = ({ 
  testimonials = defaultTestimonials,
  title = "Testimonials",
  backgroundColor = '#eff2f1',
  accentColor = '#3b5d50',
  autoplay = true,
  autoplayDelay = 5000,
  showNavigation = true,
  showPagination = true,
  className = '',
  swiperConfig = {}
}) => {
  const swiperRef = useRef(null);
  
  const config = {
    autoplay: autoplay ? {
      delay: autoplayDelay,
      disableOnInteraction: false,
    } : false,
    navigation: showNavigation ? {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } : false,
    pagination: showPagination ? {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: false,
    } : false,
    ...swiperConfig
  };

  useSwiper(swiperRef, config);

  return (
    <div 
      className={`testimonial-slider-container ${className}`}
      style={{
        padding: '5rem 0',
        backgroundColor: backgroundColor,
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}
    >
      <div className="container">
        <div className="header">
          <h2>{title}</h2>
        </div>

        <div className="slider-wrapper">
          <div className="slider-inner">
            <div 
              className="swiper testimonial-swiper" 
              ref={swiperRef}
            >
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <TestimonialSlide key={index} testimonial={testimonial} />
                ))}
              </div>
              
              {showNavigation && (
                <>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                </>
              )}
              
              {showPagination && (
                <div className="swiper-pagination"></div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-slider-container {
          --accent-color: ${accentColor};
          --background-color: ${backgroundColor};
          --text-color: #2f2f2f;
          --text-muted: #6c757d;
          --pagination-inactive: #d1d5db;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .header {
          margin-bottom: 4rem;
          text-align: center;
        }

        .header h2 {
          font-size: 2.5rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 3rem;
          font-family: inherit;
        }

        .slider-wrapper {
          display: flex;
          justify-content: center;
        }

        .slider-inner {
          width: 100%;
          max-width: 800px;
        }

        .testimonial-swiper {
          padding-bottom: 60px;
          min-height: 400px;
          position: relative;
        }

        .testimonial-content {
          background: transparent;
          padding: 2rem 1rem;
          text-align: center;
          height: auto;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .testimonial-content blockquote {
          margin-bottom: 2rem;
        }

        .testimonial-content blockquote p {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--text-muted);
          font-style: italic;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto 2rem;
        }

        .testimonial-author {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .avatar-wrapper {
          margin-bottom: 1rem;
        }

        .avatar-wrapper img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
          border: none;
        }

        .author-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-color);
          margin-bottom: 0.25rem;
        }

        .author-title {
          color: var(--text-muted);
          font-size: 0.875rem;
          font-weight: 400;
        }

        .testimonial-swiper .swiper-slide {
          transition: transform 0.6s ease, opacity 0.6s ease !important;
        }

        .testimonial-swiper .swiper-slide-active {
          opacity: 1 !important;
        }

        .testimonial-swiper .swiper-slide-next,
        .testimonial-swiper .swiper-slide-prev {
          opacity: 0.8 !important;
        }

        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: var(--accent-color) !important;
          background: transparent !important;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50% !important;
          border: 2px solid var(--accent-color) !important;
          transition: all 0.3s ease !important;
          margin-top: -22px !important;
          opacity: 1 !important;
        }
        
        .testimonial-swiper .swiper-button-next:hover,
        .testimonial-swiper .swiper-button-prev:hover {
          background: var(--accent-color) !important;
          color: white !important;
          transform: scale(1.05);
        }
        
        .testimonial-swiper .swiper-button-next::after,
        .testimonial-swiper .swiper-button-prev::after {
          font-size: 16px !important;
          font-weight: 600 !important;
        }
        
        .testimonial-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        
        .testimonial-swiper .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          background: var(--pagination-inactive) !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: var(--accent-color) !important;
          transform: scale(1.2) !important;
        }
        
        @media (max-width: 768px) {
          .testimonial-swiper .swiper-button-next,
          .testimonial-swiper .swiper-button-prev {
            display: none !important;
          }

          .header h2 {
            font-size: 2rem;
          }

          .testimonial-content {
            padding: 1.5rem 0.5rem;
            min-height: 280px;
          }

          .testimonial-content blockquote p {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .testimonial-slider-container {
            padding: 3rem 0;
          }

          .header {
            margin-bottom: 2rem;
          }

          .header h2 {
            font-size: 1.75rem;
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;