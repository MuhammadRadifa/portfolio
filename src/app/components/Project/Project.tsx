import Card from './Card'
import foto1 from './foto1.png'
import foto2 from './foto2.png'
import foto3 from './foto3.png'
import foto4 from './foto4.png'

export default function Project() {
  const data = [
    {
      title: 'Kalkulator Kesehatan',
      image: foto1,
      deskripsi:
        'Kalkulator kesehatan adalah aplikasi yang dapat menghitung berat badan ideal, kalori, dan kebutuhan air dalam sehari.',
      demo: 'https://kalkulator-kesehatan.netlify.app/',
      repo: 'https://github.com/MuhammadRadifa/kalkulator-kesehatan',
    },
    {
      title: 'Restful API Perpustakaan',
      image: foto2,
      deskripsi:
        'Restful API Perpustakaan adalah sebuah API yang digunakan untuk mengelola data buku pada perpustakaan.',
      repo: 'https://github.com/MuhammadRadifa/API-Perpustakaan',
    },
    {
      title: 'Restful API Forum',
      image: foto3,
      deskripsi: 'Restful API Social Media adalah sebuah API yang digunakan untuk mengelola sistem forum',
      repo: 'https://github.com/MuhammadRadifa/api-comunity-app',
    },
    {
      title: 'Learning Aja',
      image: foto4,
      deskripsi: 'Learning Aja adalah sebuah website yang digunakan untuk mengatur waktu kegiatan belajar.',
      repo: 'https://github.com/MuhammadRadifa/amba-ajar',
    },
  ]
  return (
    <div className='my-5 border-b-2 border-t-2 border-slate-200/90 py-4' id='project'>
      <h1 className='text-center text-2xl font-bold'>My Project</h1>
      <div className='mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6'>
        {data.map((item, index) => {
          return <Card {...item} key={index} />
        })}
      </div>
    </div>
  )
}
