import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Project from './components/Project/Project'
import Tech from './components/tech/Tech'

export default function Home() {
  return (
    <main className='mx-auto w-5/6 md:w-5/6 2xl:w-3/6'>
      <Navbar />
      <section className='border-t-2 border-slate-200/90'>
        <Hero />
        <Project />
        <Tech />
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
