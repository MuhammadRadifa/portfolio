export default function Footer() {
  const date = new Date()
  return (
    <div className='pb-8'>
      <p className='text-center'>Copyright © {date.getFullYear()}</p>
    </div>
  )
}
