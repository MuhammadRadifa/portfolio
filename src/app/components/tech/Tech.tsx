import CardTech from './CardTech'
import { AiFillHtml5 } from 'react-icons/ai'
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoReact,
  BiLogoPostgresql,
  BiLogoGoLang,
  BiLogoMongodb,
  BiLogoNodejs,
} from 'react-icons/bi'

import { SiPhp, SiExpress, SiLaravel, SiCodeigniter, SiAdonisjs, SiNextdotjs, SiMysql } from 'react-icons/si'

const techs = [
  AiFillHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  SiPhp,
  BiLogoGoLang,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  SiNextdotjs,
  BiLogoReact,
  BiLogoNodejs,
  SiExpress,
  SiAdonisjs,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  BiLogoPostgresql,
  BiLogoMongodb,
]

export default function Tech() {
  return (
    <div className='my-5 border-b-2 border-slate-200/90 pb-8' id='tech'>
      <h1 className='text-center text-2xl font-bold'>Tech Stack</h1>
      <div className='mt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-5 lg:gap-7'>
        {techs.map((tech, index) => (
          <CardTech key={index} Logo={tech} />
        ))}
      </div>
    </div>
  )
}
