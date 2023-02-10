import Slider from './Slider'
import firstImage from '../assets/image-product-1.jpg'
import secondImage from '../assets/image-product-2.jpg'
import thirdImage from '../assets/image-product-3.jpg'
import fourthImage from '../assets/image-product-4.jpg'
import iconClose from '../assets/icon-close.svg'
import cartImage from '../assets/icon-cart.svg'
import { useState } from 'react'
import LightBox from './LightBox'
import Product from './Product'
import Basket from './Basket'
const featuredImages = [firstImage, secondImage, thirdImage, fourthImage]
const Body = (props) => {
  const { product } = props
  const [isOpen, setIsOpen] = useState(false)
  const [count, setCount] = useState(1)
  const [cartItems, setCartItems] = useState([])
  const [onAddToCart, setOnAddToCart] = useState(false)

  const addCount = () => {
    setCount((prevCount) => prevCount + 1)
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x,
        ),
      )
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
  }

  const decrementCount = (product) => {
    setCount((prevCount) => prevCount - 1)
    const exist = cartItems.find((x) => x.id === product.id)
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x,
        ),
      )
    }
  }

  const lightBox = () => {
    setIsOpen(!isOpen)
  }
  const [cartBasket, setCartBasket] = useState(false)
  const showCart = () => {
    setCartBasket(!cartBasket)
  }

  const basketTimeout = setTimeout(() => {
      setCartBasket(false)
    }, 4000)

  const addToCart = (product) => {
    setOnAddToCart(true)
    if (cartItems.length >= 1) {
      return <div>there are no more products</div>
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }])
    }
    showCart()
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-around md:justify-center items-center w-full my-20">
        <Slider featuredImages={featuredImages} onClick={lightBox} />
        {isOpen ? (
          <div>
            <div className="fixed top-40 md:top-36 left-[85%] md:left-[72%] -my-4 cursor-pointer">
              <img
                src={iconClose}
                alt="imege"
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              />
            </div>
            <LightBox featuredImages={featuredImages} />
          </div>
        ) : null}
        <div
          className={
            isOpen
              ? ' w-5/6 md:w-1/2 my-10 md:my-0 opacity-5'
              : ' w-5/6 md:w-1/2 my-10 md:my-0'
          }
        >
          <Product product={product} />
          <div className=" w-full md:w-3/4 lg:w-1/2 h-28 flex flex-col md:flex-row justify-around items-center">
            {onAddToCart ? (
              <div className="bg-gray-200 w-5/6 md:w-40 h-10 rounded-lg flex justify-around items-center cursor-pointer">
                <input
                  type="button"
                  value="-"
                  className="text-orange text-lg font-bold cursor-pointer"
                  onClick={decrementCount}
                />
                <p className="font-semibold">{count}</p>
                <input
                  type="button"
                  value="+"
                  className="text-orange text-lg font-bold cursor-pointer"
                  onClick={ addCount }
                  onMouseEnter={ clearTimeout( basketTimeout ) }
                  onMouseLeave {...showCart}
                />
              </div>
            ) : (
              ''
            )}

            <button
              className={
                onAddToCart
                  ? 'flex justify-center items-center bg-orange rounded-lg w-5/6 md:w-1/2 h-10 cursor-pointer hover:scale-105'
                  : 'flex justify-center items-center bg-orange rounded-lg w-full h-10 cursor-pointer hover:scale-105'
              }
              onClick={() => addToCart(product)}
            >
              <img src={cartImage} alt="imege" className="w-5 mx-4" />{' '}
              <p className="font-semibold capitalize text-white text-sm">
                add to cart
              </p>
            </button>
          </div>
        </div>
      </div>

      <Basket
        addToCart={addToCart}
        cartItems={cartItems}
        cartBasket={cartBasket}
      />
    </div>
  )
}

export default Body
