import React from 'react';

const Hero = ({ 
  title, 
  description, 
  showButtons = true, 
  showImage = true,
  imageUrl = 'images/couch.png',
  className = '' 
}) => {
  return (
    <div className={`hero ${className}`}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1>{title}</h1>
              {description && (
                <p className="mb-4">{description}</p>
              )}
              {showButtons && (
                <div className="hero-buttons">
                  <a href="/shop" className="btn btn-secondary me-2">Shop Now</a>
                  <a href="#" className="btn btn-white-outline">Explore</a>
                </div>
              )}
            </div>
          </div>
          {showImage && (
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={imageUrl} alt={title} className="img-fluid" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;