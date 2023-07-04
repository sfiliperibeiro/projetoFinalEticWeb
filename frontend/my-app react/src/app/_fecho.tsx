"use client"

import React, { useState } from 'react';

export default function Fecho() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  return (
    <>
      {showModal && (
        <div id="myModal" className="modal" style={{ display: 'block' }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              
            </span>
            
            <button type="submit" className='fecho' onClick={closeModal}>
   &#10005;
              </button>
            
            <h1>Fecho de Conta</h1>
  
              <br />
             <h3>O valor total do seu pedido é:</h3>
           <div className='price'>47.50€</div>
              <br />
              <br />
              <form>
                <label htmlFor="fname">Número Contribuinte:</label>
              <input type="text" id="fname" name="fname" />
              </form>
              <button type="submit" className="btn" onClick={() => alert("Pagamento Efetuado")}>
                Pagamento Efetuado
              </button>
              <button type="submit" className="btn" onClick={closeModal}>
                Cancelar/Fechar
              </button>
          </div>
     
        </div>
        
             
      )}
       <button className="fecho2">Cancelar</button> 
          <button className="btn"onClick={openModal}>Pagamento</button> 
            <button className='btn' onClick={() => alert('O pedido está a ser feito na cozinha!')}>Enviar para Cozinha</button>      
      
    </>
  );
}
