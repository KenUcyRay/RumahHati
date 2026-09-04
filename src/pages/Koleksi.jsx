import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import { properties } from '../data/properties'

export default function Koleksi() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 })
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="antialiased selection:bg-brass selection:text-paper pb-24 font-body bg-paper text-ink min-h-screen">
      <Navbar />

      {/* HEADER */}
      <section className="bg-ink pt-32 pb-16 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs text-brass mb-3">Koleksi Lengkap</p>
          <h1 className="disp text-3xl sm:text-5xl text-paper leading-snug max-w-2xl">
            Seluruh hunian dalam katalog Rumah Hati, Edisi 04.
          </h1>
          <p className="text-sm text-stone mt-4">
            {properties.length} properti tersedia
          </p>
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {properties.map((p, i) => (
            <div key={p.slug} data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[300px] object-cover"
              />
              <div className="mt-3">
                <p className="text-[11px] text-brass tracking-wide mb-1">
                  {p.category}
                </p>
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-ink font-medium text-sm">{p.name}</p>
                  <span className="disp text-brass shrink-0">{p.price}</span>
                </div>
                <p className="text-xs text-ink-500 mt-0.5">{p.loc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomNav />
    </div>
  )
}