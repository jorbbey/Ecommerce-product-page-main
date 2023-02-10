import React from 'react'

const Product = (props) => {
  const { product } = props
  return (
    <div>
      <h6 className="uppercase text-orange text-xs my-2 font-bold">
        {product.title}
      </h6>
      <h1 className="capitalize text-3xl w-full md:w-1/2 mb-5 font-semibold">
        {product.name}
      </h1>
      <p className="text-gray-400 text-md md:w-3/4 lg:w-1/2 text-center md:text-left">
        {product.text}
      </p>
      <div className="my-5 flex md:flex-col justify-between items-center md:items-start">
        <div className="flex justify-between items-center w-36">
          <p className="text-2xl font-semibold">${product.price}</p>
          <p className="bg-paleOrange text-orange rounded-lg font-semibold w-10 px-1">
            {product.discount}%
          </p>
        </div>
        <p className="font-semibold text-sm text-gray-400 m-2 line-through">
          ${product.oldPrice}
        </p>
      </div>
    </div>
  )
}

export default Product
