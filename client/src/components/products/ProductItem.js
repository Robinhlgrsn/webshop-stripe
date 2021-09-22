import React from 'react'
import Button from '../UI/Button';

const ProductItem = (props) => {

  const addToCartHandler = (id) => {
    props.onAddProduct(id)
  } 

  return (
    <div className="flex flex-col w-full rounded shadow-xl mx-4 ">
      <header className="w-full h-80">
        <img src={props.imgUrl} alt={props.name} className="object-cover w-full h-full rounded-t-xl" />
      </header>
      <section className="flex flex-col p-4">
        <div className="flex justify-between font-bold">
          <h3>{props.name}</h3>
          <h3>{props.price}$</h3>
        </div>
        <p className="my-4">{props.description}</p>
        <Button onClick={() => addToCartHandler(props.id)}>BUY</Button>
      </section>
    </div>
  )
}

export default ProductItem;
