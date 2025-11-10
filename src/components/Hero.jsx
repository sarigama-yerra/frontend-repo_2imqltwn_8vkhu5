import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, CreditCard, Shield, ArrowRight } from 'lucide-react';

const brand = {
  primary: '#563C5C',
  accent: '#F2BDCD',
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" aria-label="Hero">
      <div className="relative h-[78vh] min-h-[560px] w-full">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Pastel gradient overlay - non-blocking */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-[#F2BDCD]/40 to-white"
          aria-hidden="true"
        />
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#F2BDCD]/60 bg-white/70 px-3 py-1 backdrop-blur">
                <CreditCard className="h-4 w-4" color={brand.primary} />
                <span className="text-sm font-medium" style={{ color: brand.primary }}>Pastel fintech design</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-[#563C5C] md:text-5xl">
                Modern payments for digital businesses
              </h1>
              <p className="mt-4 text-lg text-[#563C5C]/80">
                A clean SaaS platform to accept payments, manage subscriptions, and grow revenue — crafted with a soft pastel aesthetic.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white shadow-lg"
                  style={{ backgroundColor: brand.primary }}
                >
                  <Rocket className="h-4 w-4" />
                  Get started
                </a>
                <a
                  href="#auth"
                  className="inline-flex items-center gap-2 rounded-lg border px-4 py-2"
                  style={{ borderColor: brand.primary, color: brand.primary }}
                >
                  Try the demo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  { icon: Shield, title: 'Secure by default' },
                  { icon: CreditCard, title: 'Global payments' },
                  { icon: Rocket, title: 'Fast onboarding' },
                ].map((item) => (
                  <div key={item.title} className="flex items-center gap-3 rounded-xl border bg-white/70 p-3 backdrop-blur" style={{ borderColor: brand.accent }}>
                    <item.icon className="h-5 w-5" color={brand.primary} />
                    <span className="text-sm font-medium" style={{ color: brand.primary }}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
