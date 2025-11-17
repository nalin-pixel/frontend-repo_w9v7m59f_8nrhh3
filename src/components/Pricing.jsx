export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-4 text-gray-600">Start free and scale as you grow. No hidden fees, ever.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 lg:grid-cols-3">
          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
            <p className="mt-1 text-sm text-gray-600">For solo founders validating an idea</p>
            <p className="mt-6 text-4xl font-semibold text-gray-900">$0<span className="text-base font-normal text-gray-600">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Unlimited virtual cards</li>
              <li>• Real-time analytics</li>
              <li>• Community support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white">Get started</a>
          </div>

          <div className="relative rounded-2xl border border-black/10 bg-gray-900 p-6 text-white shadow-sm ring-1 ring-black/10">
            <div className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-900">Popular</div>
            <h3 className="text-lg font-semibold">Growth</h3>
            <p className="mt-1 text-sm text-gray-200">For growing teams with increasing volume</p>
            <p className="mt-6 text-4xl font-semibold">$49<span className="text-base font-normal text-gray-300">/mo</span></p>
            <ul className="mt-6 space-y-2 text-sm text-gray-200">
              <li>• Everything in Starter</li>
              <li>• Team controls & budgets</li>
              <li>• Priority support</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-xl bg-white px-5 py-3 text-sm font-medium text-gray-900">Start Growth</a>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Scale</h3>
            <p className="mt-1 text-sm text-gray-600">For enterprises with complex needs</p>
            <p className="mt-6 text-4xl font-semibold text-gray-900">Custom</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>• Dedicated account manager</li>
              <li>• SSO & advanced compliance</li>
              <li>• Volume-based discounts</li>
            </ul>
            <a href="#cta" className="mt-8 inline-flex w-full justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-medium text-gray-900">Contact sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
