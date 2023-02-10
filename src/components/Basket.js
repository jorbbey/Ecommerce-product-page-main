import { useState } from 'react'
import image from '../assets/image-product-1-thumbnail.jpg'

const Basket = ({ cartItems, cartBasket }) => {
  
  return (
    <div
      className={
        cartBasket
          ? 'bg-white absolute w-[350px] h-[300px] top-16 right-3 md:right-2 lg:right-28 shadow-2xl rounded-lg'
          : 'hidden'
      }
    >
      <h1 className="capitalize font-bold m-5">cart</h1>
      <hr />
      {cartItems.length === 0 && (
        <div className="capitalize text-gray-500 flex justify-center items-center my-20">
          your cart is empty
        </div>
      )}
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-around items-center my-7">
          <img src={image} alt="imege" className="w-[70px]" />
          <div>
            <h1 className="text-gray-400 capitalize">{item.name}</h1>
            <p className="text-gray-400">
              {item.qty} x ${item.price}
            </p>
          </div>
          <i>del</i>
        </div>
      ))}
      {/* <div className="flex justify-center items-center bg-orange rounded-lg w-3/4 h-10 cursor-pointer hover:scale-105" style={{margin: '0 auto'}}>
        checkout
      </div> */}
    </div>
  )
}

export default Basket
