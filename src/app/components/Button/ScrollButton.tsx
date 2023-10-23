'use client'

import { use, useEffect, useState } from 'react'
import { BsFillRocketFill } from 'react-icons/bs'

export default function ScrollButton() {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-28 right-2.5 z-50 flex h-10 w-10 items-center justify-center rounded-full border bg-white/30 text-2xl backdrop-blur-lg transition-all hover:bg-black hover:text-white sm:right-20 sm:h-14 sm:w-14 sm:text-3xl md:right-20 lg:right-40'
      style={{ display: visible ? 'flex' : 'none' }}
    >
      <BsFillRocketFill />
    </button>
  )
}
