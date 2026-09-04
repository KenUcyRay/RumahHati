import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 inset-x-0 z-40 flex items-center justify-between px-6 lg:px-10 transition-all duration-300 ${
        scrolled
          ? 'py-4 bg-ink/70 backdrop-blur-sm border-b border-brass/30'
          : 'py-6 bg-transparent'
      }`}
    >
      <Link to="/" className="disp text-lg text-paper drop-shadow-sm">
        Rumah <span className="italic">Hati</span>
      </Link>
      <span className="text-[11px] text-paper/80 tracking-wide hidden sm:inline">
        Edisi 04 — 2026
      </span>
    </div>
  )
}