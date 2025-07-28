import React, { useState } from 'react';

const About = () => {
  // State cho testimonial slider
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  // Dữ liệu team members
  const teamMembers = [
    {
      id: 1,
      image: 'images/person_1.jpg',
      firstName: 'Lawson',
      lastName: 'Arnold',
      position: 'CEO, Founder, Atty.',
      description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    },
    {
      id: 2,
      image: 'images/person_2.jpg',
      firstName: 'Jeremy',
      lastName: 'Walker',
      position: 'CEO, Founder, Atty.',
      description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    },
    {
      id: 3,
      image: 'images/person_3.jpg',
      firstName: 'Patrik',
      lastName: 'White',
      position: 'CEO, Founder, Atty.',
      description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    },
    {
      id: 4,
      image: 'images/person_4.jpg',
      firstName: 'Kathryn',
      lastName: 'Ryan',
      position: 'CEO, Founder, Atty.',
      description: 'Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.'
    }
  ]
  // Hàm xử lý chuyển slide
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Dữ liệu testimonials
  const testimonials = [
    {
      id: 1,
      content: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
      image: "images/person-1.png"
    },
    {
      id: 2,
      content: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
      image: "images/person-1.png"
    },
    {
      id: 3,
      content: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.",
      author: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
      image: "images/person-1.png"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>About Us</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                  Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <p>
                  <a href="" className="btn btn-secondary me-2">Shop Now</a>
                  <a href="#" className="btn btn-white-outline">Explore</a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src="images/couch.png" className="img-fluid" alt="Couch" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div className="row my-5">
                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="images/truck.svg" alt="Fast Shipping" className="imf-fluid" />
                    </div>
                    <h3>Fast &amp; Free Shipping</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                      Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="images/bag.svg" alt="Easy Shopping" className="imf-fluid" />
                    </div>
                    <h3>Easy to Shop</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                      Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="images/support.svg" alt="24/7 Support" className="imf-fluid" />
                    </div>
                    <h3>24/7 Support</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                      Aliquam vulputate.
                    </p>
                  </div>
                </div>

                <div className="col-6 col-md-6">
                  <div className="feature">
                    <div className="icon">
                      <img src="images/return.svg" alt="Easy Returns" className="imf-fluid" />
                    </div>
                    <h3>Hassle Free Returns</h3>
                    <p>
                      Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                      Aliquam vulputate.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap">
                <img src="images/why-choose-us-img.jpg" alt="Why Choose Us" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>

          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                <img src={member.image} className="img-fluid mb-5" alt={`${member.firstName} ${member.lastName}`} />
                <h3>
                  <a href="#">
                    <span className="">{member.firstName}</span> {member.lastName}
                  </a>
                </h3>
                <span className="d-block position mb-4">{member.position}</span>
                <p>{member.description}</p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial-section before-footer-section">
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
                  <span 
                    className="prev" 
                    onClick={prevTestimonial}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="fa fa-chevron-left"></span>
                  </span>
                  <span 
                    className="next" 
                    onClick={nextTestimonial}
                    style={{ cursor: 'pointer' }}
                  >
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
                              <img 
                                src={testimonials[currentTestimonial].image} 
                                alt={testimonials[currentTestimonial].author} 
                                className="img-fluid" 
                              />
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
    </>
  );
};

export default About;