import React from 'react';
import Hero from '../../components/client/Hero';
import TestimonialSlider from '../../components/client/TestimonialSlider';

function Blog() {
  // Dữ liệu blog posts mẫu
  const blogPosts = [
    {
      id: 1,
      image: '/images/post-1.jpg',
      title: 'First Time Home Owner Ideas',
      author: 'Kristin Watson',
      date: 'Dec 19, 2021',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 2,
      image: '/images/post-2.jpg',
      title: 'How To Keep Your Furniture Clean',
      author: 'Robert Fox',
      date: 'Dec 15, 2021',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 3,
      image: '/images/post-3.jpg',
      title: 'Small Space Furniture Apartment Ideas',
      author: 'Kristin Watson',
      date: 'Dec 12, 2021',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 4,
      image: '/images/post-1.jpg',
      title: 'Interior Design Tips',
      author: 'Jenny Wilson',
      date: 'Dec 10, 2021',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 5,
      image: '/images/post-2.jpg',
      title: 'Modern Furniture Trends',
      author: 'Robert Fox',
      date: 'Dec 8, 2021',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 6,
      image: '/images/post-3.jpg',
      title: 'Sustainable Living Ideas',
      author: 'Kristin Watson',
      date: 'Dec 5, 2021',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 7,
      image: '/images/post-1.jpg',
      title: 'Home Decoration Guide',
      author: 'Jenny Wilson',
      date: 'Dec 3, 2021',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    },
    {
      id: 8,
      image: '/images/post-2.jpg',
      title: 'Minimalist Design Concepts',
      author: 'Robert Fox',
      date: 'Dec 1, 2021',
      excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    }
  ];

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <Hero 
        title="Blog"
        description="Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique."
        showButtons={true}
        showImage={true}
      />

      {/* Blog Section */}
      <div className="blog-section">
        <div className="container">
          <div className="row">
            {blogPosts.map((post) => (
              <div key={post.id} className="col-12 col-sm-6 col-md-4 mb-5">
                <div className="post-entry">
                  <a href="#" className="post-thumbnail">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="img-fluid"
                    />
                  </a>
                  <div className="post-content-entry">
                    <h3><a href="#">{post.title}</a></h3>
                    <div className="meta">
                      <span>by <a href="#">{post.author}</a></span>{' '}
                      <span>on <a href="#">{post.date}</a></span>
                    </div>
                    {post.excerpt && (
                      <p className="post-excerpt">{post.excerpt}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials with Swiper */}
      <TestimonialSlider 
        title="What Our Readers Say"
        backgroundColor="#eff2f1"
        accentColor="#3b5d50"
        autoplay={true}
        autoplayDelay={6000}
        showNavigation={true}
        showPagination={true}
        className="before-footer-section"
      />
    </div>
  );
}

export default Blog;