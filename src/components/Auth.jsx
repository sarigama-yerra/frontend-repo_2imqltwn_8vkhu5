import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';

const brand = {
  primary: '#563C5C',
  accent: '#F2BDCD',
};

export default function Auth() {
  const [mode, setMode] = useState('signin');

  return (
    <section id="auth" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold" style={{ color: brand.primary }}>
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="mt-3 text-[#563C5C]/80">
              {mode === 'signin'
                ? 'Access your dashboard to manage payments and subscriptions.'
                : 'Join in minutes and start accepting payments today.'}
            </p>

            <div className="mt-8 rounded-2xl border bg-white/80 p-6 backdrop-blur" style={{ borderColor: brand.accent }}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`${mode === 'signin' ? 'Signed in' : 'Account created'} (demo)`);
                }}
                className="space-y-4"
              >
                {mode === 'signup' && (
                  <div className="relative">
                    <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" color={brand.primary} />
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full rounded-lg border bg-white/70 px-10 py-2 outline-none"
                      style={{ borderColor: brand.accent, color: brand.primary }}
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" color={brand.primary} />
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="w-full rounded-lg border bg-white/70 px-10 py-2 outline-none"
                    style={{ borderColor: brand.accent, color: brand.primary }}
                  />
                </div>
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" color={brand.primary} />
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="w-full rounded-lg border bg-white/70 px-10 py-2 outline-none"
                    style={{ borderColor: brand.accent, color: brand.primary }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg px-4 py-2 font-medium text-white"
                  style={{ backgroundColor: brand.primary }}
                >
                  {mode === 'signin' ? 'Sign in' : 'Create account'}
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-[#563C5C]/80">
                {mode === 'signin' ? (
                  <>
                    New here?{' '}
                    <button className="underline" style={{ color: brand.primary }} onClick={() => setMode('signup')}>
                      Create an account
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button className="underline" style={{ color: brand.primary }} onClick={() => setMode('signin')}>
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border bg-gradient-to-br from-[#F2BDCD]/50 to-white p-8" style={{ borderColor: brand.accent }}>
            <h3 className="text-xl font-semibold" style={{ color: brand.primary }}>
              Why choose us
            </h3>
            <ul className="mt-4 space-y-3 text-[#563C5C]/90">
              <li>• Bank-grade security and compliance</li>
              <li>• Seamless subscription management</li>
              <li>• Real-time insights and reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
