// src/pages/client/Home.js
import React, { useState } from 'react';

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      content: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
      image: "/images/person-1.png"
    },
    {
      content: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      author: "John Smith", 
      position: "Marketing Director, ABC Corp.",
      image: "/images/person-1.png"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Modern Interior <span className="d-block">Design Studio</span></h1>
                <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
                <p><a href="" className="btn btn-secondary me-2">Shop Now</a><a href="#" className="btn btn-white-outline">Explore</a></p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="/images/couch.png" className="img-fluid" alt="Couch" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
              <p className="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
              <p><a href="/shop" className="btn">Explore</a></p>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/cart">
                <img src="/images/product-1.png" className="img-fluid product-thumbnail" alt="Nordic Chair" />
                <h3 className="product-title">Nordic Chair</h3>
                <strong className="product-price">$50.00</strong>
                <span className="icon-cross">
                  <img src="/images/cross.svg" className="img-fluid" alt="Add" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/cart">
                <img src="/images/product-2.png" className="img-fluid product-thumbnail" alt="Kruzo Aero Chair" />
                <h3 className="product-title">Kruzo Aero Chair</h3>
                <strong className="product-price">$78.00</strong>
                <span className="icon-cross">
                  <img src="/images/cross.svg" className="img-fluid" alt="Add" />
                </span>
              </a>
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
              <a className="product-item" href="/cart">
                <img src="/images/product-3.png" className="img-fluid product-thumbnail" alt="Ergonomic Chair" />
                <h3 className="product-title">Ergonomic Chair</h3>
                <strong className="product-price">$43.00</strong>
                <span className="icon-cross">
                  <img src="/images/cross.svg" className="img-fluid" alt="Add" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="/images/truck.svg" alt="Shipping" className="img-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="/images/bag.svg" alt="Shopping" className="img-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="/images/support.svg" alt="Support" className="img-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="/images/return.svg" alt="Returns" className="img-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img src="/images/why-choose-us-img.jpg" alt="Why Choose Us" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* We Help Section */}
      <div className="we-help-section">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="imgs-grid">
                <div className="grid grid-1"><img src="/images/img-grid-1.jpg" alt="Interior" /></div>
                <div className="grid grid-2"><img src="/images/img-grid-2.jpg" alt="Interior" /></div>
                <div className="grid grid-3"><img src="/images/img-grid-3.jpg" alt="Interior" /></div>
              </div>
            </div>
            <div className="col-lg-5 ps-lg-5">
              <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
              <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

              <ul className="list-unstyled custom-list my-4">
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
                <li>Donec vitae odio quis nisl dapibus malesuada</li>
              </ul>
              <p><a href="#" className="btn">Explore</a></p>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Product */}
      <div className="popular-product">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src="/images/product-1.png" alt="Nordic Chair" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Nordic Chair</h3>
                  <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src="/images/product-2.png" alt="Kruzo Aero Chair" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Kruzo Aero Chair</h3>
                  <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="product-item-sm d-flex">
                <div className="thumbnail">
                  <img src="/images/product-3.png" alt="Ergonomic Chair" className="img-fluid" />
                </div>
                <div className="pt-3">
                  <h3>Ergonomic Chair</h3>
                  <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                  <p><a href="#">Read More</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              <h2 className="section-title">Testimonials</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="testimonial-slider-wrap text-center">
                <div id="testimonial-nav">
                  <span className="prev" onClick={prevTestimonial}>
                    <span className="fa fa-chevron-left"></span>
                  </span>
                  <span className="next" onClick={nextTestimonial}>
                    <span className="fa fa-chevron-right"></span>
                  </span>
                </div>

                <div className="testimonial-slider">
                  <div className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>&ldquo;{testimonials[currentTestimonial].content}&rdquo;</p>
                          </blockquote>

                          <div className="author-info">
                            <div className="author-pic">
                              <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].author} className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">{testimonials[currentTestimonial].author}</h3>
                            <span className="position d-block mb-3">{testimonials[currentTestimonial].position}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6">
              <h2 className="section-title">Recent Blog</h2>
            </div>
            <div className="col-md-6 text-start text-md-end">
              <a href="#" className="more">View All Posts</a>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src="/images/post-1.jpg" alt="Blog Post" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">First Time Home Owner Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src="/images/post-2.jpg" alt="Blog Post" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src="/images/post-3.jpg" alt="Blog Post" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;