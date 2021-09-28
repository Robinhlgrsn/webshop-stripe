import React from 'react'
import Button from '../UI/Button';

const ProductItem = (props) => {

  const addToCartHandler = (item) => {
    props.onAddProduct(item)
  } 

  return (
    <div className="flex flex-col flex-1 rounded shadow-xl mx-4 md:my-4">
      <header className="flex flex-col h-96">
          <img src={props.imgUrl} alt={props.name} className="object-cover w-full h-full rounded-t-md" />
      </header>
      <section className="flex flex-col flex-1 p-3">
        <div className="flex flex-auto justify-between font-bold">
          <h3>{props.name}</h3>
          <h3>{props.price}$</h3>
        </div>
        <p className="my-4">{props.description}</p>
        <Button onClick={() => addToCartHandler({ id: props.id, name: props.name, price: props.price, img: props.imgUrl, quantity: 1, type: 'add' })}>BUY</Button>
      </section>
    </div>
  )
}

export default ProductItem;
