import React from 'react';
import TestimonialSlider from '../../components/client/TestimonialSlider';

function Blog() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Blog</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <p>
                  <a href="#" className="btn btn-secondary me-2">Shop Now</a>
                  <a href="#" className="btn btn-white-outline">Explore</a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="/images/couch.png" alt="couch" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="row">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img
                      src={`/images/post-${(index % 3) + 1}.jpg`}
                      alt="Post"
                      className="img-fluid"
                    />
                  </a>
                  <div className="post-content-entry">
                    <h3><a href="#">Post Title Example</a></h3>
                    <div className="meta">
                      <span>by <a href="#">Author Name</a></span>{' '}
                      <span>on <a href="#">Dec {12 + index}, 2021</a></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials with Swiper */}
      <TestimonialSlider />
    </>
  );
}

export default Blog;