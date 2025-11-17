export default function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-gray-900 via-gray-800 to-black p-10 text-white shadow-sm">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to simplify your company\'s finances?</h2>
            <p className="mt-4 text-gray-300">Join thousands of modern teams using FlairPay to issue cards, control spend, and reconcile in minutes.</p>
            <form className="mt-8 grid gap-3 sm:grid-cols-[1fr_auto]">
              <input type="email" required placeholder="Work email" className="h-12 rounded-xl border-0 px-4 text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/50" />
              <button className="h-12 rounded-xl bg-white px-6 font-medium text-gray-900 hover:bg-gray-100">Get early access</button>
            </form>
            <p className="mt-3 text-xs text-gray-400">No spam. Cancel anytime.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
