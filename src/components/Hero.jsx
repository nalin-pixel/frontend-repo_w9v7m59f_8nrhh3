import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/95" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur-md">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Now launching cards for global teams
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
            Minimal banking suite for modern commerce
          </h1>
          <p className="mt-5 text-base text-gray-600 sm:text-lg">
            Scale your SaaS with effortless payments, virtual cards, and realtime cashflow — designed with a minimalist aesthetic and bulletproof security.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="pointer-events-auto inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow hover:bg-gray-800">
              Get started free
            </a>
            <a href="#features" className="pointer-events-auto inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
              Explore features
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 opacity-80 sm:flex sm:flex-row sm:gap-8">
            <img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg/2705.svg" alt="Check" className="h-5 w-5" />
            <p className="text-sm text-gray-600">No monthly fees</p>
            <p className="text-sm text-gray-600">Instant virtual cards</p>
            <p className="text-sm text-gray-600">SOC2 & PCI compliant</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
