import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'
import { properties } from '../data/properties'

const previewProperties = properties.slice(0, 4)

const advisors = [
  {
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    name: 'Siti Rahma, S.E.',
    role: 'Senior Advisory Partner',
  },
  {
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    name: 'Budi Santoso',
    role: 'Commercial Portfolio Lead',
  },
  {
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    name: 'Dewi Lestari',
    role: 'Resort & Villa Specialist',
  },
]

const tickerItems = [
  'Rumah Tapak',
  'Penthouse & Apartemen',
  'Villa & Resort Privat',
  'Legal Terverifikasi',
  'Konsultasi Privat',
]

export default function Home() {
  const location = useLocation()

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 60 })
  }, [])

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50)
      }
    }
  }, [location])

  return (
    <div className="antialiased selection:bg-brass selection:text-paper pb-20 font-body bg-paper text-ink">
      <Navbar />

      {/* SAMPUL */}
      <section id="sampul" className="relative h-[92vh] min-h-[560px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600"
          alt="Rumah Hati"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/10" />
        <div className="relative h-full max-w-6xl mx-auto px-6 lg:px-10 flex flex-col justify-end pb-20">
          <p className="text-xs text-brass mb-4" data-aos="fade-up">
            Koleksi privat — hunian bernilai tinggi di Indonesia
          </p>
          <h1
            className="disp text-4xl sm:text-6xl lg:text-7xl text-paper leading-[1.05] max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Kediaman yang dirancang untuk ketenangan,
            <br className="hidden sm:block" />
            <span className="italic text-stone">bukan sekadar dihuni.</span>
          </h1>
        </div>
      </section>

      {/* TICKER */}
      <div className="bg-ink text-stone py-3 overflow-hidden border-y border-brass/40">
        <div className="marquee-track text-xs tracking-wide">
          {[0, 1].map((rep) => (
            <div className="flex items-center shrink-0" key={rep}>
              {tickerItems.map((item) => (
                <span key={item} className="flex items-center">
                  <span className="px-6">{item}</span>
                  <span className="text-brass">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SOROTAN */}
      <section className="relative py-24 lg:py-32 px-6 lg:px-10">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1400"
          alt="The Grand Heritage Residence"
          className="w-full h-[60vh] lg:h-[75vh] object-cover"
        />
        <div
          className="relative max-w-md bg-paper-100 border-t-2 border-brass px-8 py-9 -mt-16 ml-0 sm:ml-10 lg:ml-20 shadow-[0_10px_40px_-15px_rgba(23,35,29,0.25)]"
          data-aos="fade-up"
        >
          <p className="text-xs text-brass mb-3">Sorotan Edisi Ini</p>
          <h2 className="disp text-2xl sm:text-3xl text-ink mb-3">
            The Grand Heritage Residence
          </h2>
          <p className="text-sm text-ink-500 leading-relaxed mb-5">
            Courtyard privat, ceiling empat meter, dan cahaya pagi yang jatuh
            tepat di ruang makan — interpretasi tropis modern di jantung
            Menteng.
          </p>
          <div className="flex items-center justify-between text-xs text-ink-500 pt-4 border-t hr">
            <span>Menteng, Jakarta Pusat</span>
            <span className="disp text-lg text-brass">Rp 5,8 M</span>
          </div>
        </div>
      </section>

      {/* GALERI (preview) */}
      <section id="koleksi" className="py-10">
        <div className="px-6 lg:px-10 max-w-6xl mx-auto mb-8 flex items-end justify-between">
          <h2 className="disp text-3xl text-ink">Koleksi Terpilih</h2>
          <Link
            to="/koleksi"
            className="text-xs text-brass border-b border-brass pb-0.5 hover:text-brass-600 hover:border-brass-600 transition shrink-0"
          >
            Lihat Semua
          </Link>
        </div>
        <div className="flex gap-5 overflow-x-auto no-scrollbar px-6 lg:px-10 pb-4 snap-x snap-mandatory">
          {previewProperties.map((p, i) => (
            <div
              className={`snap-center shrink-0 ${p.w}`}
              key={p.slug}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-[420px] object-cover"
              />
              <div className="flex items-baseline justify-between mt-3">
                <div>
                  <p className="text-ink font-medium text-sm">{p.name}</p>
                  <p className="text-xs text-ink-500">{p.loc}</p>
                </div>
                <span className="disp text-brass">{p.price}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KUTIPAN */}
      <section className="bg-ink text-paper py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center" data-aos="fade-up">
          <span className="quotemark text-6xl text-brass leading-none">
            &ldquo;
          </span>
          <p className="disp italic text-2xl sm:text-4xl leading-snug -mt-4">
            Rumah adalah muara dari seluruh perjalanan hidup manusia.
          </p>
        </div>
      </section>

      {/* PEMBIAYAAN */}
      <section id="pembiayaan" className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="bg-paper-100 px-6 lg:px-16 py-20 lg:py-28 flex flex-col justify-center"
          data-aos="fade-right"
        >
          <p className="text-xs text-brass mb-4">Pembiayaan</p>
          <h2 className="disp text-3xl sm:text-4xl text-ink leading-snug mb-6">
            Mulai dari
            <br />
            <span className="text-5xl sm:text-6xl text-brass">Rp 15 Juta</span>
            <span className="text-xl text-ink-500"> /bulan</span>
          </h2>
          <p className="text-sm text-ink-500 leading-relaxed max-w-sm">
            Bekerja sama dengan bank terkemuka untuk suku bunga KPR kompetitif
            dan proses pengajuan yang tidak berbelit.
          </p>
          <div className="mt-8 h-px w-full bg-stone relative">
            <div className="absolute left-0 top-0 h-px w-[35%] bg-brass" />
          </div>
          <p className="text-[11px] text-ink-500 mt-2">
            Ilustrasi tenor 15 tahun, uang muka 20%
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1000"
          alt="Pembiayaan"
          className="w-full h-72 lg:h-full object-cover"
        />
      </section>

      {/* DIREKTORI */}
      <section className="py-24 lg:py-28">
        <div className="px-6 lg:px-10 max-w-6xl mx-auto mb-8">
          <p className="text-xs text-brass mb-2">Direktori</p>
          <h2 className="disp text-3xl text-ink">Private Property Advisors</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto no-scrollbar px-6 lg:px-10 pb-2 snap-x snap-mandatory">
          {advisors.map((a, i) => (
            <div
              className="snap-center shrink-0 w-[220px] relative"
              key={a.name}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <img
                src={a.img}
                alt={a.name}
                className="w-full h-[280px] object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4">
                <p className="text-paper text-sm font-medium">{a.name}</p>
                <p className="text-brass text-xs">{a.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PENUTUP */}
      <section id="kontak" className="relative h-[70vh] min-h-[440px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600"
          alt="Kontak Rumah Hati"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
        <div
          className="relative h-full max-w-3xl mx-auto px-6 flex flex-col items-center justify-center text-center"
          data-aos="fade-up"
        >
          <p className="text-xs text-brass mb-4">Jadwalkan Kunjungan</p>
          <h2 className="disp text-3xl sm:text-5xl text-paper leading-snug mb-8">
            Konsultasi & survei properti secara privat.
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-x-8 gap-y-3 text-sm text-stone">
            <span>(021) 555-8899</span>
            <span className="hidden sm:inline text-brass">·</span>
            <span>halo@rumahhati.id</span>
            <span className="hidden sm:inline text-brass">·</span>
            <span>Mega Kuningan, Jakarta Selatan</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-paper-100 border-t hr py-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-ink-500">
          <span className="disp text-ink">
            Rumah <span className="italic">Hati</span>
          </span>
          <span>© 2026 Rumah Hati — Edisi 04</span>
        </div>
      </footer>

      <BottomNav />
    </div>
  )
}