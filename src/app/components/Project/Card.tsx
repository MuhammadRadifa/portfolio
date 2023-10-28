'use client'

import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function Card({ image, title, deskripsi, repo, demo }: any) {
  function redirect(url: string) {
    window.open(url, '_blank')
  }
  return (
    <div
      onClick={() => {
        redirect(repo)
      }}
      className='group relative h-36 w-[280px] cursor-pointer overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-dark-secondary sm:w-[360px] lg:h-44'
    >
      <Image src={image} width={500} height={500} className='h-full w-full object-cover ' alt='foto' />
      <div className='absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all group-hover:translate-y-0'>
        {demo && (
          <a href={demo} className='cursor-pointer text-sm text-black lg:text-base'>
            <FaExternalLinkAlt />
          </a>
        )}
        {repo && (
          <a href={repo} className='cursor-pointer text-black lg:text-lg'>
            <FaGithub />
          </a>
        )}
      </div>
      <div className='absolute bottom-0 h-10 w-full bg-gray-primary p-2 transition-all duration-300 group-hover:h-[60%] dark:bg-dark-secondary lg:group-hover:h-2/4 '>
        <div className='h-20'>
          <h1 className='line-clamp-1 font-semibold group-hover:line-clamp-2'>{title}</h1>
          <p className='hidden h-full text-xs font-thin group-hover:block'>{deskripsi}</p>
        </div>
      </div>
    </div>
  )
}
