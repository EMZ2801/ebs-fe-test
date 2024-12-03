import React from 'react';
import { Product } from '../context/CartContext';
import { useCart } from '../context/CartContext';
import '../index.css';

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
    const { addToCart } = useCart();
  
    return (
      <div className="product-card">
        <div className='imageCart'>
            <img src={product.image} alt={product.title} />
        </div>
     
        <h3>{product.title}</h3>
        <p>Цена: {product.price} руб.</p>
        
        <button onClick={() => addToCart(product)}>Добавить в корзину</button>
      </div>
    );
  };
  
  export default ProductItem;
