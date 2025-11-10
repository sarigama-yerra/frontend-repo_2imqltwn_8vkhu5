import React from 'react';
import { Check } from 'lucide-react';

const brand = {
  primary: '#563C5C',
  accent: '#F2BDCD',
};

const plans = [
  {
    name: 'Starter',
    price: '$9',
    period: 'mo',
    features: [
      'Up to 1,000 transactions',
      'Basic analytics',
      'Community support',
    ],
  },
  {
    name: 'Growth',
    price: '$29',
    period: 'mo',
    featured: true,
    features: [
      'Up to 10,000 transactions',
      'Advanced analytics',
      'Priority support',
      'Customer portal',
    ],
  },
  {
    name: 'Scale',
    price: '$99',
    period: 'mo',
    features: [
      'Unlimited transactions',
      'Custom reporting',
      'Dedicated manager',
      'SLA & compliance',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold" style={{ color: brand.primary }}>
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-[#563C5C]/80">
            Choose a plan that fits your stage. Upgrade anytime.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border bg-white/80 p-6 backdrop-blur ${
                plan.featured ? 'shadow-xl scale-[1.02]' : ''
              }`}
              style={{ borderColor: brand.accent }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold" style={{ color: brand.primary }}>
                  {plan.name}
                </h3>
                {plan.featured && (
                  <span className="rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: brand.accent, color: brand.primary }}>
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold" style={{ color: brand.primary }}>
                  {plan.price}
                </span>
                <span className="mb-1 text-sm text-[#563C5C]/70">/ {plan.period}</span>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-[#563C5C]/90">
                    <Check className="mt-0.5 h-4 w-4" color={brand.primary} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-8 w-full rounded-lg px-4 py-2 font-medium text-white"
                style={{ backgroundColor: brand.primary }}
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
