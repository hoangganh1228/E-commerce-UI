import React, { useEffect, useRef } from 'react';

const testimonials = [
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

const TestimonialSlider = () => {
  const swiperRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    // Load Swiper CSS
    const swiperCSS = document.createElement('link');
    swiperCSS.rel = 'stylesheet';
    swiperCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.css';
    document.head.appendChild(swiperCSS);

    // Load Swiper JS
    const swiperScript = document.createElement('script');
    swiperScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.7/swiper-bundle.min.js';
    swiperScript.onload = () => {
      // Initialize Swiper after script loads
      if (window.Swiper && swiperRef.current) {
        swiperInstance.current = new window.Swiper(swiperRef.current, {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0, // Đặt về 0 để tránh spacing issues
          loop: false, // Tắt loop để test trước
          autoHeight: false,
          centeredSlides: false,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
          speed: 300,
          effect: 'slide',
          allowTouchMove: true,
          resistanceRatio: 0,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          // Thêm event để debug
          on: {
            slideChange: function () {
              console.log('Slide changed to:', this.activeIndex);
            },
            click: function (swiper, event) {
              // Ngăn multiple clicks
              event.preventDefault();
              event.stopPropagation();
            }
          }
        });

        // Thêm throttle cho navigation buttons
        const nextBtn = document.querySelector('.swiper-button-next');
        const prevBtn = document.querySelector('.swiper-button-prev');
        
        let isSliding = false;
        
        if (nextBtn) {
          nextBtn.addEventListener('click', (e) => {
            if (isSliding) {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
            isSliding = true;
            setTimeout(() => { isSliding = false; }, 350);
          });
        }
        
        if (prevBtn) {
          prevBtn.addEventListener('click', (e) => {
            if (isSliding) {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
            isSliding = true;
            setTimeout(() => { isSliding = false; }, 350);
          });
        }
      }
    };
    document.head.appendChild(swiperScript);

    // Cleanup
    return () => {
      if (swiperInstance.current) {
        swiperInstance.current.destroy(true, true);
      }
      if (document.head.contains(swiperCSS)) {
        document.head.removeChild(swiperCSS);
      }
      if (document.head.contains(swiperScript)) {
        document.head.removeChild(swiperScript);
      }
    };
  }, []);

  return (
    <div style={{
      padding: '5rem 0',
      backgroundColor: '#eff2f1',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: '#2f2f2f',
              marginBottom: '3rem',
              fontFamily: 'inherit'
            }}>
              Testimonials
            </h2>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '800px' }}>
            <div 
              className="swiper testimonial-swiper" 
              ref={swiperRef}
              style={{
                paddingBottom: '60px',
                minHeight: '400px', // Fixed height để tránh layout jump
                position: 'relative'
              }}
            >
              <div className="swiper-wrapper">
                {testimonials.map((item, index) => (
                  <div key={index} className="swiper-slide">
                    <div style={{
                      background: 'transparent',
                      padding: '2rem 1rem',
                      textAlign: 'center',
                      height: 'auto',
                      minHeight: '320px', // Min height cho consistency
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}>
                      <blockquote style={{ marginBottom: '2rem' }}>
                        <p style={{
                          fontSize: '1.125rem',
                          lineHeight: '1.8',
                          color: '#6c757d',
                          fontStyle: 'italic',
                          fontWeight: '400',
                          maxWidth: '600px',
                          margin: '0 auto 2rem'
                        }}>
                          {item.quote}
                        </p>
                      </blockquote>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                      }}>
                        <div style={{ marginBottom: '1rem' }}>
                          <img
                            src={item.avatar}
                            alt={item.name}
                            style={{
                              width: '80px',
                              height: '80px',
                              borderRadius: '50%',
                              objectFit: 'cover',
                              border: 'none'
                            }}
                          />
                        </div>
                        <h5 style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#2f2f2f',
                          marginBottom: '0.25rem'
                        }}>
                          {item.name}
                        </h5>
                        <span style={{
                          color: '#6c757d',
                          fontSize: '0.875rem',
                          fontWeight: '400'
                        }}>
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation buttons */}
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              
              {/* Pagination */}
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #3b82f6 !important;
          background: transparent !important;
          width: 44px !important;
          height: 44px !important;
          border-radius: 50% !important;
          border: 2px solid #3b82f6 !important;
          transition: all 0.3s ease !important;
          margin-top: -22px !important;
          opacity: 1 !important;
        }
        
        .testimonial-swiper .swiper-button-next:hover,
        .testimonial-swiper .swiper-button-prev:hover {
          background: #3b82f6 !important;
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
          background: #d1d5db !important;
          opacity: 1 !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #3b82f6 !important;
          transform: scale(1.2) !important;
        }

        .swiper-slide {
          transition: transform 0.6s ease, opacity 0.6s ease !important;
        }

        .swiper-slide-active {
          opacity: 1 !important;
        }

        .swiper-slide-next,
        .swiper-slide-prev {
          opacity: 0.8 !important;
        }
        
        @media (max-width: 768px) {
          .testimonial-swiper .swiper-button-next,
          .testimonial-swiper .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;