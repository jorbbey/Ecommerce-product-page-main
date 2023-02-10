import { useRef, useState } from 'react'
import { useEffect } from 'react'
import prev from '../assets/icon-previous.svg'
import next from '../assets/icon-next.svg'

let count = 0
let slideInterval
const Slider = ({ featuredImages, onClick, Wrapper = 'div' }) => {
  const slideRef = useRef()
  const [currentIndex, setCurrentIndex] = useState(0)
  const handleNextSlide = () => {
    count = (count + 3) % featuredImages.length
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }
  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(() => {
    startSlider()
    slideRef.current.addEventListener('animationend', removeAnimation)
    slideRef.current.addEventListener('mouseenter', pauseSlider)
    slideRef.current.addEventListener('mouseleave', startSlider)
  }, [])

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleNextSlide()
    }, 5000)
  }

   const pauseSlider = () => {
    clearInterval(slideInterval)
  }

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
    <div className="w-[95%] md:w-1/4 m-auto">
      <Wrapper>
        <div className="w-full flex flex-col m-auto justify-center items-center md:hidden">
          <img
            src={featuredImages[currentIndex]}
            alt="imege"
            className="rounded-xl w-80"
            onClick={onClick}
          />
          <div className="flex justify-between items-center w-3/4 my-5">
            <div
              className="bg-gray-300 rounded-full w-7 h-7 flex justify-center cursor-pointer"
              onClick={prevSlide}
            >
              <img src={prev} alt="prev" className="h-5 mt-1" />
            </div>
            <div
              className="bg-gray-300 rounded-full w-7 h-7 flex justify-center cursor-pointer"
              onClick={nextSlide}
            >
              <img src={next} alt="next" className="h-5 mt-1" />
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper className="hidden md:block">
        <div ref={slideRef} className="w-full relative select-none">
          <div className="aspect-h-11 aspect-w-12">
            <img
              src={featuredImages[currentIndex]}
              alt="imege"
              className="rounded-xl cursor-pointer"
              onClick={onClick}
            />
          </div>
        </div>
      </Wrapper>

      <div className="hidden md:flex justify-between items-center my-10">
        {featuredImages.map((item, index) => (
          <li className="list-none rounded-lg hover:border-2 hover:border-orange">
            <img
              key={index}
              src={item}
              alt="imege"
              className="rounded-lg w-20 md:w-14 lg:w-20 hover:opacity-30"
            />
          </li>
        ))}
      </div>
    </div>
  )
}

export default Slider
