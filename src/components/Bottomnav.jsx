import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { icon: 'fa-house', label: 'Sampul', to: '/#sampul', matchPath: '/' },
  { icon: 'fa-images', label: 'Koleksi', to: '/koleksi', matchPath: '/koleksi' },
  { icon: 'fa-coins', label: 'Pembiayaan', to: '/#pembiayaan', matchPath: '/' },
  { icon: 'fa-phone', label: 'Kontak', to: '/#kontak', matchPath: '/' },
]

export default function BottomNav() {
  const location = useLocation()

  return (
    <nav className="bottom-bar fixed bottom-0 inset-x-0 z-50 bg-ink border-t border-brass/40">
      <div className="max-w-md mx-auto grid grid-cols-4 text-paper">
        {navItems.map((item) => {
          const active = location.pathname === item.matchPath
          return (
            <Link
              key={item.label}
              to={item.to}
              className={`flex flex-col items-center gap-1 py-3 transition ${
                active ? 'text-brass' : 'text-stone hover:text-paper'
              }`}
            >
              <i className={`fa-solid ${item.icon} text-sm`}></i>
              <span className="text-[10px]">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}