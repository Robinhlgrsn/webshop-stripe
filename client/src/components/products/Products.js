import React from 'react'
import ProductItem from './ProductItem'

const Products = (props) => {
  return (
    <>
    <section className="container mx-auto flex flex-col items-center mt-10">
      <header className="text-2xl font-bold py-4">Products</header>
      <section className="flex">
        {props.productData.map(product => (
          <div className="flex flex-1" key={product.id}>
            <ProductItem
              onAddProduct={props.onAddProduct}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imgUrl={product.imgUrl}
            />
          </div>
        ))}
      </section>
    </section>
    </>
  )
}

export default Products;
