import { useRef, useState } from 'react'
import { useEffect } from 'react'
import prev from '../assets/icon-previous.svg'
import next from '../assets/icon-next.svg'
const LightBox = ({ featuredImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const firstSlide = currentIndex === 0
    const newIndex = firstSlide ? featuredImages.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const lastSlide = currentIndex === featuredImages.length - 1
    const newIndex = lastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="fixed top-44 md:top-40 left-[8%] md:left-[40%] cursor-pointer">
      <img
        src={featuredImages[currentIndex]}
        alt="imege"
        className="rounded-xl w-80 md:w-80"
      />
      <div className="flex justify-between items-center w-full absolute top-44 md:top-48">
        <div
          className="bg-white rounded-full w-7 h-7 flex justify-center cursor-pointer"
          onClick={prevSlide}
        >
          <img src={prev} alt="prev" className="h-5 mt-1" />
        </div>
        <div
          className="bg-white rounded-full w-7 h-7 flex justify-center cursor-pointer"
          onClick={nextSlide}
        >
          <img src={next} alt="next" className="h-5 mt-1" />
        </div>
      </div>
    </div>
  )
}

export default LightBox
