import React from 'react';
import TestimonialSlider from '../../components/client/TestimonialSlider';
import Hero from '../../components/client/Hero';
 // Adjust path as needed

const About = () => {
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
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero 
        title="About"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        showButtons={true}
        showImage={true}
      />

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
                      <img src="images/truck.svg" alt="Fast Shipping" className="img-fluid" />
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
                      <img src="images/bag.svg" alt="Easy Shopping" className="img-fluid" />
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
                      <img src="images/support.svg" alt="24/7 Support" className="img-fluid" />
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
                      <img src="images/return.svg" alt="Easy Returns" className="img-fluid" />
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

      {/* New Testimonial Section */}
      <TestimonialSlider 
        title="What Our Clients Say"
        backgroundColor="#eff2f1"
        accentColor="#3b5d50"
        autoplay={true}
        autoplayDelay={6000}
        showNavigation={true}
        showPagination={true}
        className="before-footer-section"
      />
    </>
  );
};

export default About;