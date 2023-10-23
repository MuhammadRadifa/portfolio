export default function CardTech({ Logo }: any) {
  return (
    <div className='bg-gray-primary flex h-16 min-h-[40px] w-16 min-w-[40px] items-center justify-center rounded-md text-4xl transition-all hover:scale-105 sm:h-20 sm:w-20 sm:text-5xl lg:h-24 lg:w-24 lg:text-6xl'>
      <Logo />
    </div>
  )
}
