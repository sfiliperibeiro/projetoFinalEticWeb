"use client"
import React from 'react';
import './home.css';



const ProductRow = () => {
  return (
    <>
      <h2>Entradas</h2>
      <div className='align'>
    <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Pão de Alho</h4>
      </div>
      <div className="price">
        4.90€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
  <button type="button" className='add'>Adicionar ao Pedido</button>
   
      
    </div>

     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Humus com Cenoura</h4>
      </div>
      <div className="price">
        5.50€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    
    </div>

    
     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Folhado de Alheira</h4>
      </div>
      <div className="price">
        7.70€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
      <button type="button" className='add'>Adicionar ao Pedido</button>
      

   
    </div>
</div>

<h2>Pratos Principais</h2>
    <div className='align'>
    <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Risotto de Cogumelos</h4>
      </div>
      <div className="price">
        15.90€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>

     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Lasanha de Legumes</h4>
      </div>
      <div className="price">
        13.50€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>

    
     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Raviolis de Beterraba</h4>
      </div>
      <div className="price">
        14.70€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>
</div>


<h2>Sobremesas</h2>
    <div className='align'>
    <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Tiramisu</h4>
      </div>
      <div className="price">
        3.40€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>

     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Cheesecake Morango</h4>
      </div>
      <div className="price">
        4.50€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>

    
     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Mouse Limão</h4>
      </div>
      <div className="price">
        4.00€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>
</div>


<h2>Bebidas</h2>
    <div className='align'>
    <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Água</h4>
      </div>
      <div className="price">
        0.90€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>

     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Refrigerantes</h4>
      </div>
      <div className="price">
        1.50€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>

    
     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Sumo Natural</h4>
      </div>
      <div className="price">
        2.00€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>

      <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Cerveja</h4>
      </div>
      <div className="price">
        1.90€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
  <button type="button" className='add'>Adicionar ao Pedido</button>
    </div>

     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Vinho Copo</h4>
      </div>
      <div className="price">
        2.50€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>

    
     <div className="item">
      <div className="content">
      </div>
      <div className="title">
        <h4>Vinho Garrafa</h4>
      </div>
      <div className="price">
        12.00€
      </div>
      <input type="number" className="count" min="1" defaultValue={1} />
        <button type="button" className='add'>Adicionar ao Pedido</button>

    </div>
</div>

    </>
  );
}

export default ProductRow;