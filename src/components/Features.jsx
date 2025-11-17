import { Shield, Zap, Globe2, Wallet } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank-grade security',
    description: 'End-to-end encryption, role-based access, and continuous monitoring out of the box.'
  },
  {
    icon: Zap,
    title: 'Lightning fast',
    description: 'Ultra-low latency APIs and instant card provisioning to keep your business moving.'
  },
  {
    icon: Globe2,
    title: 'Global by default',
    description: 'Multi-currency support, localized compliance, and worldwide acceptance.'
  },
  {
    icon: Wallet,
    title: 'Smart spending',
    description: 'Budgets, approvals, and granular controls to manage every dollar with clarity.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50/60">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Everything you need, nothing you don\'t</h2>
          <p className="mt-4 text-gray-600">A focused toolkit that does one thing exceptionally well: help you move money effortlessly.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white">
                <Icon size={18} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
