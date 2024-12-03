import React, { useState } from 'react'; // Добавлено useState
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart, updateItemQuantity } = useCart(); // Добавлено updateItemQuantity
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({}); // Добавлено состояние для количеств

  const totalPrice = cart.reduce((total, item) => total + item.price * (quantities[item.id] || 1), 0); // Обновлено для учета количества

  const handleQuantityChange = (id: number, quantity: number) => {
    setQuantities((prev) => ({ ...prev, [id]: quantity }));
    updateItemQuantity(id, quantity); // Обновление количества в контексте
  };

  return (
    <div>
      <h2>Корзина</h2>
      {cart.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.price} руб.
                <input 
                  type="number" 
                  value={quantities[item.id] || 1} 
                  min="1" 
                  onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))} // Обработчик изменения количества
                />
                <button onClick={() => removeFromCart(item.id)}>Удалить</button>
              </li>
            ))}
          </ul>
          <h3>Итого: {totalPrice} руб.</h3>
          <button onClick={clearCart}>Очистить корзину</button>
        </>
      )}
    </div>
  );
};

export default Cart;
