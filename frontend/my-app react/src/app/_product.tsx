"use client"
import React, { useState } from 'react';
import './home.css';

interface CartItem {
  title: string;
  price: number;
  count: number;
}

const ProductRow = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (title: string, price: number, count: number) => {
    const existingItem = cartItems.find((item) => item.title === title);

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        count: existingItem.count + count,
      };
      setCartItems((prevCartItems) => {
        return prevCartItems.map((item) =>
          item.title === title ? updatedItem : item
        );
      });
    } else {
      const newItem = { title, price, count };
      setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    }
  };

  const handleAddToCart = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    title: string,
    price: number
  ) => {
    const itemContainer = event.currentTarget.parentElement;
    const countInput = itemContainer?.querySelector('.count') as HTMLInputElement;
    const count = parseInt(countInput.value, 10);

    if (count > 0) {
      addToCart(title, price, count);
      countInput.value = '1';
    }
  };

  return (
    <>

    <div className='list'>
      <h2>Entradas</h2>
      <div className='align'>
        {/* Pão de Alho */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Pão de Alho</h4>
          </div>
          <div className="price">
            4.90€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Pão de Alho', 4.9)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Humus com Cenoura */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Humus com Cenoura</h4>
          </div>
          <div className="price">
            5.50€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Humus com Cenoura', 5.5)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Folhado de Alheira */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Folhado de Alheira</h4>
          </div>
          <div className="price">
            7.70€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Folhado de Alheira', 7.7)}>
            Adicionar ao Pedido
          </button>
        </div>
      </div>

      <h2>Pratos Principais</h2>
      <div className='align'>
        {/* Risotto de Cogumelos */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Risotto de Cogumelos</h4>
          </div>
          <div className="price">
            15.90€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Risotto de Cogumelos', 15.9)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Lasanha de Legumes */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Lasanha de Legumes</h4>
          </div>
          <div className="price">
            13.50€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Lasanha de Legumes', 13.5)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Raviolis de Beterraba */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Raviolis de Beterraba</h4>
          </div>
          <div className="price">
            14.70€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Raviolis de Beterraba', 14.7)}>
            Adicionar ao Pedido
          </button>
        </div>
      </div>

      <h2>Sobremesas</h2>
      <div className='align'>
        {/* Tiramisu */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Tiramisu</h4>
          </div>
          <div className="price">
            3.40€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Tiramisu', 3.4)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Cheesecake Morango */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Cheesecake Morango</h4>
          </div>
          <div className="price">
            4.50€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Cheesecake Morango', 4.5)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Mouse Limão */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Mouse Limão</h4>
          </div>
          <div className="price">
            4.00€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Mouse Limão', 4)}>
            Adicionar ao Pedido
          </button>
        </div>
      </div>

      <h2>Bebidas</h2>
      <div className='align'>
        {/* Água */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Água</h4>
          </div>
          <div className="price">
            0.90€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Água', 0.9)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Refrigerantes */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Refrigerantes</h4>
          </div>
          <div className="price">
            1.50€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Refrigerantes', 1.5)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Sumo Natural */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Sumo Natural</h4>
          </div>
          <div className="price">
            2.00€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Sumo Natural', 2)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Cerveja */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Cerveja</h4>
          </div>
          <div className="price">
            1.90€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Cerveja', 1.9)}>
            Adicionar ao Pedido
          </button>
        </div>

        {/* Vinho Copo */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Vinho Copo</h4>
          </div>
          <div className="price">
            2.50€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Vinho Copo', 2.5)}>
           Adicionar ao Pedido
          </button>
        </div>

        {/* Vinho Garrafa */}
        <div className="item">
          <div className="content"></div>
          <div className="title">
            <h4>Vinho Garrafa</h4>
          </div>
          <div className="price">
            15.00€
          </div>
          <input type="number" className="count" min="1" defaultValue={1} />
          <button type="button" className='add' onClick={(event) => handleAddToCart(event, 'Vinho Garrafa', 15)}>
            Adicionar ao Pedido
          </button>
        </div>
      </div>
      </div>

<div className='cart'>
<h1>Resumo do Pedido</h1>
<div className="cart-items">
  {cartItems.length > 0 ? (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.count}</td>
            <td>{item.price.toFixed(2)}€</td>
          </tr>
        ))}

        <tr>
          <td>Total:</td>
          <td>
            {cartItems
              .reduce((total, item) => total + item.price * item.count, 0)
              .toFixed(2)}
            €
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <p>Nenhum item no pedido</p>
  )}
</div>

</div>

    </>
  );
};

export default ProductRow;
