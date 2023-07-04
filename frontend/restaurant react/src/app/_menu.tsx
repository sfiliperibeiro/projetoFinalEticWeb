"use client"
import React from 'react';
import { Document, Page } from 'react-pdf';

const Menu = () => {
  return (
    <div className='btnMenuu'>
      <center>
        <a href="/menu.pdf" target="_blank" rel="noopener noreferrer">
          <button className="button2">Abrir Menu</button>
        </a>
        <br />
      </center>
    </div>
  );
};

export default Menu;

