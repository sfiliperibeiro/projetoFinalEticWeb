"use client"
import React, { useEffect } from 'react';

const MyComponent = () => {
  useEffect(() => {
    const handleItemClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const item = target.closest('.item');

      if (item && target.classList.contains('add')) {
        const itemNew = item.cloneNode(true) as HTMLElement;
        let checkIsset = false;

        const listCart = document.querySelectorAll('.cart .item');
        listCart.forEach((cart) => {
          if (cart.getAttribute('data-key') === itemNew.getAttribute('data-key')) {
            checkIsset = true;
            cart.classList.add('danger');
            setTimeout(() => {
              cart.classList.remove('danger');
            }, 1000);
          }
        });

        if (!checkIsset) {
          document.querySelector('.listCart')?.appendChild(itemNew);
        }
      }
    };

    const list = document.querySelectorAll('.list .item');
    list.forEach((item) => {
      item.addEventListener('click', handleItemClick);
    });

    return () => {
      list.forEach((item) => {
        item.removeEventListener('click', handleItemClick);
        
      });
      
    };
  }, []);

  return (
    <></>
  );
};

export default MyComponent;
