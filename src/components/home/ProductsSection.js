import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import monitorImage from '../../assets/images/png.png';
import headphonesImage from '../../assets/images/headphones.png';
import keyboardImage from '../../assets/images/mechanical-keyboard.png';

const ProductsSection = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Pro Gaming Monitor',
      category: 'Monitors',
      price: 499,
      image: monitorImage,
      specs: ['27"', '165Hz', '1ms'],
      badge: 'New',
      inCart: false
    },
    {
      id: 2,
      name: 'Premium Wireless Headphones',
      category: 'Audio',
      price: 299,
      image: headphonesImage,
      specs: ['Bluetooth 5.0', '40h Battery', 'ANC'],
      badge: '',
      inCart: false
    },
    {
      id: 3,
      name: 'Mechanical Gaming Keyboard',
      category: 'Peripherals',
      price: 149,
      image: keyboardImage,
      specs: ['RGB', 'Mechanical', 'Hot-swap'],
      badge: 'Sale',
      inCart: false
    }
  ]);

  const handleAddToCart = (id) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, inCart: true } : product
    ));
    
    // Reset the "added" state after animation completes
    setTimeout(() => {
      setProducts(products.map(product => 
        product.id === id ? { ...product, inCart: false } : product
      ));
    }, 1000);
  };

  return (
    <section className="products-section">
      <div className="section-header">
        <h2 className="section-title">Featured Products</h2>
        <div className="section-line"></div>
      </div>
      
      <div className="featured-products">
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              {product.badge && <div className="product-badge">{product.badge}</div>}
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="hover-overlay">
                  <button className="quick-view">Quick View</button>
                </div>
              </div>
              <div className="product-details">
                <div>
                  <div className="product-category">{product.category}</div>
                  <h3 className="product-title">{product.name}</h3>
                  <div className="product-specs">
                    {product.specs.map((spec, index) => (
                      <span key={index}>{spec}</span>
                    ))}
                  </div>
                </div>
                <div className="product-price">
                  <span className="price">${product.price}</span>
                  <button 
                    className={`add-to-cart ${product.inCart ? 'added' : ''}`}
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <span>Add to Cart</span>
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
