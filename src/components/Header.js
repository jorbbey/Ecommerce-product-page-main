import cartImage from '../assets/icon-cart.svg'
import avatar from '../assets/image-avatar.png'
import logo from '../assets/logo.svg'
import menuOpen from '../assets/icon-menu.svg'
import menuClose from '../assets/icon-close.svg'
import { useState } from 'react'
const navItems = ['collection', 'men', 'women', 'about', 'contact']
const Header = ({ showCart }) => {
  const [isMobile, setIsMobile] = useState(false)
  return (
    <div
      className="flex justify-between items-center w-full lg:w-5/6 h-20 md:shadow-2xl rounded-md"
      style={{ margin: '20px auto' }}
    >
      <div className="mx-4 w-28 h-5" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <img
            src={menuClose}
            alt="icon"
            className="block md:hidden cursor-pointer w-5/6 h-full"
          />
        ) : (
          <img
            src={menuOpen}
            alt="icon"
            className="block md:hidden cursor-pointer w-full h-full"
          />
        )}
      </div>
      <img src={logo} alt="logo" className="w-3/4 ml-10 md:ml-0 md:w-40" />
      <div className="flex justify-around items-center w-full lg:w-3/4 ">
        <div
          className={
            isMobile
              ? 'md:hidden flex flex-col items-center w-full h-screen absolute top-24 left-0 bg-white'
              : 'hidden md:flex justify-between items-center w-2/3 -ml-20'
          }
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className="list-none capitalize text-lg cursor-pointer my-8 md:my-0 nav-links"
            >
              {item}
            </li>
          ))}
        </div>
      </div>

      <div className="flex justify-around items-center w-[100%] md:w-40">
        <img
          src={cartImage}
          alt="cart"
          className="cursor-pointer"
          onClick={() => console.log('i am meant to show cart')}
        />
        <img src={avatar} alt="pics" className="w-1/4 cursor-pointer" />
      </div>
    </div>
  )
}

export default Header
