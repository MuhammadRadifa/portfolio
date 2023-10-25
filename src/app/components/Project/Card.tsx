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
      className='group relative h-36 max-w-[280px] cursor-pointer overflow-hidden rounded-lg border border-gray-200 object-cover dark:border-dark-secondary sm:max-w-[360px] lg:h-44 lg:max-w-[440px] '
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
      <div className='absolute bottom-0 h-10 w-full bg-gray-primary p-2 transition-all duration-300 group-hover:h-2/4 dark:bg-dark-secondary '>
        <div className='h-20'>
          <h1 className='mb-2 line-clamp-1 font-semibold group-hover:line-clamp-2'>{title}</h1>
          <p className='h-full text-xs font-thin'>{deskripsi}</p>
        </div>
      </div>
    </div>
  )
}
