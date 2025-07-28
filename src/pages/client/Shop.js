import React from 'react';

const Shop = () => {
  // Dữ liệu sản phẩm mẫu
  const products = [
    {
      id: 1,
      image: 'images/product-3.png',
      title: 'Nordic Chair',
      price: '$50.00'
    },
    {
      id: 2,
      image: 'images/product-1.png',
      title: 'Nordic Chair',
      price: '$50.00'
    },
    {
      id: 3,
      image: 'images/product-2.png',
      title: 'Kruzo Aero Chair',
      price: '$78.00'
    },
    {
      id: 4,
      image: 'images/product-3.png',
      title: 'Ergonomic Chair',
      price: '$43.00'
    },
    {
      id: 5,
      image: 'images/product-3.png',
      title: 'Nordic Chair',
      price: '$50.00'
    },
    {
      id: 6,
      image: 'images/product-1.png',
      title: 'Nordic Chair',
      price: '$50.00'
    },
    {
      id: 7,
      image: 'images/product-2.png',
      title: 'Kruzo Aero Chair',
      price: '$78.00'
    },
    {
      id: 8,
      image: 'images/product-3.png',
      title: 'Ergonomic Chair',
      price: '$43.00'
    }
  ];

  const handleAddToCart = (productId) => {
    // Xử lý thêm vào giỏ hàng
    console.log('Add to cart:', productId);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7">
              {/* Có thể thêm nội dung khác ở đây */}
            </div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#" onClick={(e) => e.preventDefault()}>
                  <img 
                    src={product.image} 
                    className="img-fluid product-thumbnail" 
                    alt={product.title}
                  />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">{product.price}</strong>

                  <span 
                    className="icon-cross"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product.id);
                    }}
                  >
                    <img src="images/cross.svg" className="img-fluid" alt="Add to cart" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;