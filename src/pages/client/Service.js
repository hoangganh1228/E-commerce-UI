import React from 'react';
import Hero from '../../components/client/Hero';
import TestimonialSlider from '../../components/client/TestimonialSlider';

const Services = () => {
  // Dữ liệu services/features
  const services = [
    {
      id: 1,
      icon: 'images/truck.svg',
      title: 'Fast & Free Shipping',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      id: 2,
      icon: 'images/bag.svg',
      title: 'Easy to Shop',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      id: 3,
      icon: 'images/support.svg',
      title: '24/7 Support',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      id: 4,
      icon: 'images/return.svg',
      title: 'Hassle Free Returns',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      id: 5,
      icon: 'images/truck.svg',
      title: 'Fast & Free Shipping',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      id: 6,
      icon: 'images/bag.svg',
      title: 'Easy to Shop',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      id: 7,
      icon: 'images/support.svg',
      title: '24/7 Support',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    },
    {
      id: 8,
      icon: 'images/return.svg',
      title: 'Hassle Free Returns',
      description: 'Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.'
    }
  ];

  // Dữ liệu products
  const products = [
    {
      id: 1,
      image: 'images/product-1.png',
      title: 'Nordic Chair',
      price: '$50.00'
    },
    {
      id: 2,
      image: 'images/product-2.png',
      title: 'Kruzo Aero Chair',
      price: '$78.00'
    },
    {
      id: 3,
      image: 'images/product-3.png',
      title: 'Ergonomic Chair',
      price: '$43.00'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <Hero 
        title="Services"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        showButtons={true}
        showImage={true}
      />

      {/* Why Choose Us Section */}
      <div className="why-choose-section">
        <div className="container">
          <div className="row my-5">
            {services.map((service) => (
              <div key={service.id} className="col-6 col-md-6 col-lg-3 mb-4">
                <div className="feature">
                  <div className="icon">
                    <img src={service.icon} alt={service.title} className="img-fluid" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="product-section pt-0">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
              <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
              <p className="mb-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
                Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <p><a href="#" className="btn">Explore</a></p>
            </div>

            {/* Product Items */}
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                <a className="product-item" href="#">
                  <img src={product.image} className="img-fluid product-thumbnail" alt={product.title} />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">{product.price}</strong>
                  <span className="icon-cross">
                    <img src="images/cross.svg" className="img-fluid" alt="Add to cart" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New Testimonial Section */}
      <TestimonialSlider 
        title="What Our Customers Say About Our Services"
        backgroundColor="#eff2f1"
        accentColor="#3b5d50"
        autoplay={true}
        autoplayDelay={5500}
        showNavigation={true}
        showPagination={true}
        className="before-footer-section"
      />
    </div>
  );
};

export default Services;