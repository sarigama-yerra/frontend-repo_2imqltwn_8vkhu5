import React from 'react';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Auth from './components/Auth';
import BlogAndContact from './components/BlogAndContact';

const brand = {
  primary: '#563C5C',
  accent: '#F2BDCD',
};

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#F2BDCD]/20 to-white">
      {/* Header */}
      <header className="sticky top-0 z-20 w-full border-b bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="text-xl font-extrabold" style={{ color: brand.primary }}>
            PastelPay
          </a>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#pricing" className="hover:underline" style={{ color: brand.primary }}>Pricing</a>
            <a href="#auth" className="hover:underline" style={{ color: brand.primary }}>Auth</a>
            <a href="#contact" className="hover:underline" style={{ color: brand.primary }}>Contact</a>
          </nav>
          <a
            href="#auth"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-white"
            style={{ backgroundColor: brand.primary }}
          >
            Sign in
          </a>
        </div>
      </header>

      {/* Sections */}
      <Hero />
      <Pricing />
      <Auth />
      <BlogAndContact />

      {/* Footer */}
      <footer className="border-t py-10">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm" style={{ color: brand.primary }}>
              © {new Date().getFullYear()} PastelPay. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm" style={{ color: brand.primary }}>
              <a href="#pricing" className="hover:underline">Pricing</a>
              <a href="#auth" className="hover:underline">Auth</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
