import { useState } from 'react'
import { Menu, X, CreditCard, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Product', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Customers', href: '#testimonials' },
    { name: 'Contact', href: '#cta' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 backdrop-blur-md px-4 py-3 shadow-sm ring-1 ring-black/5">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-sky-400 to-teal-400 text-white shadow">
              <CreditCard size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-gray-900">FlairPay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="hover:text-gray-900 transition-colors">
                {l.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sign in</a>
            <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-gray-800">
              <Sparkles size={16} />
              Get started
            </a>
          </div>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white/70 backdrop-blur-md"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-6 mt-2 rounded-2xl border border-white/20 bg-white/70 p-4 backdrop-blur-md shadow ring-1 ring-black/5">
          <nav className="grid gap-2">
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {l.name}
              </a>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a href="#" className="rounded-lg px-3 py-2 text-center text-sm font-medium text-gray-700 bg-white">Sign in</a>
              <a href="#cta" className="rounded-lg px-3 py-2 text-center text-sm font-medium text-white bg-gray-900">Get started</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
