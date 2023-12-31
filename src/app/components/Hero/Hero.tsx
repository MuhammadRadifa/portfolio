'use client'

import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'
import profile from './profil.jpg'

export default function Hero() {
  return (
    <div className='mt-4 flex flex-col items-center sm:flex-row-reverse'>
      <div className='w-[60%] overflow-hidden rounded-xl object-cover'>
        <Image src={profile} alt='profile' width={200} height={200} className='w-full grayscale-60 hover:grayscale-0' />
      </div>
      <div className='mt-4 w-full text-center text-black dark:text-gray-primary sm:mt-0 sm:text-left'>
        <h1 className='text-3xl font-bold lg:text-5xl'>Hello,I am Radifa.</h1>
        <h1 className='text-2xl font-light lg:text-4xl'>
          A{' '}
          <TypeAnimation
            sequence={['Junior Web Developer', 5000, 'Frontend Web Developer', 5000, 'Backend Web Developer', 5000]}
            wrapper='span'
            speed={40}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '1em', display: 'inline-block' }}
          />
        </h1>
        <p className='mx-auto mt-2 max-w-xs px-2 text-sm font-thin leading-6 text-slate-400 sm:mx-0 sm:px-0 lg:text-base'>
          Saya Seorang mahasiswa Teknik Informatika yang memiliki ketertarikan pada bidang teknologi
        </p>
        <a
          href='./cv.pdf'
          download={true}
          className='group mx-auto mt-2 flex w-fit items-center gap-2 hover:text-slate-600 sm:mx-0'
        >
          Download CV{' '}
          <span className='transition-all group-hover:translate-x-2 '>
            <BsArrowRight />
          </span>
        </a>
      </div>
    </div>
  )
}
