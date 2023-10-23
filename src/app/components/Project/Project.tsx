import Card from './Card'

export default function Project() {
  return (
    <div className='my-5 border-b-2 border-t-2 border-slate-200/90 py-4'>
      <h1 className='text-center text-2xl font-bold'>My Project</h1>
      <div className='mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6'>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}
