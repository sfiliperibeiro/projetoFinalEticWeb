import React from 'react';
import './home.css';
import './_mesa';
import Dropdown from "./_mesa";
import ProductRow from './_product';
import Fecho from './_fecho';
import MyComponent from './_cart';





export default function Home() {

  const options =[
    {value:"mesa1", label: "Mesa 1"},
     {value:"mesa2", label: "Mesa 2"},
      {value:"mesa3", label: "Mesa 3"},
       {value:"mesa4", label: "Mesa 4"},
        {value:"mesa5", label: "Mesa 5"},
  ]



  return (
    <>
      <div className="Home">
      <h1>Escolher Mesa</h1>
      <Dropdown placeHolder="Select..." options={options}/>
    </div>
    <br></br>
      <h1>Selecionar Produtos</h1>
      <div className='grid'>
        <div className='list'>
     
            <ProductRow></ProductRow>

        </div>


    <div className='cart'>
      <div className='name'>Pedido</div>
      <div className='listCart'>
        <MyComponent></MyComponent>
     
      </div>

      <br></br>
      <Fecho></Fecho>

    </div>


      </div>
      </>
  );
}
