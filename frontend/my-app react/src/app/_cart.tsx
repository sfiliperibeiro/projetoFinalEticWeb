"use client"
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const handleItemClick = (event) => {
      const target = event.target;
      const item = target.closest('.item');

      if (item && target.classList.contains('add')) {
        const itemNew = item.cloneNode(true);
        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.classList.add('remove');
        itemNew.appendChild(removeButton);
        document.querySelector('.listCart')?.appendChild(itemNew);
      }
    };

    const handleRemoveClick = (event) => {
      const target = event.target;
      const item = target.closest('.item');
      if (item && target.classList.contains('remove')) {
        item.remove();
      }
    };

    const list = document.querySelectorAll('.list .item');
    list.forEach((item) => {
      item.addEventListener('click', handleItemClick);
    });

    const listCart = document.querySelector('.listCart');
    if (listCart) {
      listCart.addEventListener('click', handleRemoveClick);
    }

    return () => {
      list.forEach((item) => {
        item.removeEventListener('click', handleItemClick);
      });
      if (listCart) {
        listCart.removeEventListener('click', handleRemoveClick);
      }
    };
  }, []);

  return <></>;
};

export default MyComponent;
