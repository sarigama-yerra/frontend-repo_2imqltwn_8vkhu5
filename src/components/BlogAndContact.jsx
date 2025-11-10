import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

const brand = {
  primary: '#563C5C',
  accent: '#F2BDCD',
};

const posts = [
  {
    id: 1,
    title: 'Designing pastel fintech interfaces',
    excerpt: 'How soft colors can reduce cognitive load and improve trust.',
  },
  {
    id: 2,
    title: 'Subscription metrics that matter',
    excerpt: 'Key KPIs to track for sustainable SaaS growth.',
  },
  {
    id: 3,
    title: 'Launching globally with confidence',
    excerpt: 'From localized payments to fraud protections — a checklist.',
  },
];

export default function BlogAndContact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // This is a demo form. In a real app, post to your backend endpoint.
      await new Promise((r) => setTimeout(r, 800));
      setStatus('success');
      e.target.reset();
    } catch (e) {
      setStatus('error');
    }
  };

  return (
    <section className="relative border-t/0 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Blog */}
          <div>
            <h2 className="text-3xl font-bold" style={{ color: brand.primary }}>
              From the blog
            </h2>
            <p className="mt-3 text-[#563C5C]/80">Insights on product, design, and growth.</p>
            <div className="mt-8 space-y-5">
              {posts.map((p) => (
                <article key={p.id} className="rounded-2xl border bg-white/80 p-5 backdrop-blur" style={{ borderColor: brand.accent }}>
                  <h3 className="text-xl font-semibold" style={{ color: brand.primary }}>{p.title}</h3>
                  <p className="mt-2 text-[#563C5C]/80">{p.excerpt}</p>
                  <a href="#" className="mt-3 inline-flex items-center gap-1 text-sm font-medium" style={{ color: brand.primary }}>
                    Read more <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact" className="rounded-2xl border bg-white/80 p-6 backdrop-blur" style={{ borderColor: brand.accent }}>
            <h2 className="text-2xl font-semibold" style={{ color: brand.primary }}>Contact us</h2>
            <p className="mt-2 text-[#563C5C]/80">Have questions? We’ll get back within 1 business day.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border bg-white/70 px-4 py-2 outline-none"
                style={{ borderColor: brand.accent, color: brand.primary }}
              />
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-lg border bg-white/70 px-4 py-2 outline-none"
                style={{ borderColor: brand.accent, color: brand.primary }}
              />
              <textarea
                required
                rows="4"
                placeholder="Message"
                className="w-full rounded-lg border bg-white/70 px-4 py-2 outline-none"
                style={{ borderColor: brand.accent, color: brand.primary }}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 font-medium text-white disabled:opacity-70"
                style={{ backgroundColor: brand.primary }}
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
                <Send className="h-4 w-4" />
              </button>
              {status === 'success' && (
                <p className="text-sm" style={{ color: brand.primary }}>Thanks! We received your message.</p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
