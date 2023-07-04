"use client"

import React, { useState } from 'react';

export default function Login() {
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
              &times;
            </span>

            
            <h2>Iniciar Sessão</h2>
            <form className="myregisto">
              <label htmlFor="femail">Email</label>
              <input type="text" id="femail" name="femail" />
              <br />
              <label htmlFor="fpassword">Password</label>
              <input type="password" id="fpassword" name="fpassword" />
              <br />

              <button type="submit" className="button2">
                Iniciar
              </button>
            </form>
            <h2>Registar</h2>
            <form className="myregisto">
              <label htmlFor="fname">Nome:</label>
              <input type="text" id="fname" name="fname" />
              <br />
              <label htmlFor="femail2">Email</label>
              <input type="text" id="femail2" name="femail2" />
              <br />
              <label htmlFor="ftelefone">Telefone</label>
              <input type="number" id="ftelefone" name="ftelefone" />
              <br />
              <button type="submit" className="button">
                Registar
              </button>
            </form>
            
          </div>
        </div>
      )}

      <button className="registo" onClick={openModal}>
        login/registar
      </button>
    </>
  );
}
