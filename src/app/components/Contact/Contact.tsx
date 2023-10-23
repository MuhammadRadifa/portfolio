import { BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagramAlt } from 'react-icons/bi'
import { RiTwitterXFill } from 'react-icons/ri'

const contact = [BiLogoGithub, BiLogoLinkedinSquare, BiLogoInstagramAlt, RiTwitterXFill]

export default function Contact() {
  return (
    <div className='my-5 border-b-2 border-slate-200/90 pb-8'>
      <h1 className='text-center text-2xl font-bold'>Contact Me</h1>
      <div className='mt-2 flex flex-wrap items-center justify-center gap-2'>
        {contact.map((contact, index) => {
          const Icon = contact
          return (
            <div
              key={index}
              className='flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-primary text-2xl hover:bg-black hover:text-white sm:h-14 sm:w-14 sm:text-3xl lg:h-16 lg:w-16 lg:text-4xl'
            >
              <Icon />
            </div>
          )
        })}
      </div>
    </div>
  )
}