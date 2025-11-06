import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield, CreditCard, Wand2 } from 'lucide-react';

const features = [
  {
    icon: Wand2,
    title: 'AI Story + Art + Voice',
    desc: 'End-to-end orchestration creates consistent characters, safe narratives, and gentle narration.',
  },
  {
    icon: Shield,
    title: 'Kid-Safe by Default',
    desc: 'SafeSearch, content filters, and privacy controls ensure delightful, appropriate content.',
  },
  {
    icon: CreditCard,
    title: 'Subscriptions with Stripe',
    desc: 'Simple, family-friendly pricing with export to PDF, EPUB, and MP4.',
  },
  {
    icon: BookOpen,
    title: 'Magical Flipbook UX',
    desc: 'Responsive page-flip animations powered by CSS 3D and motion.',
  },
];

const FeatureGrid = () => {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 text-center">
        <h2 className="font-manrope text-3xl font-extrabold text-slate-900 sm:text-4xl">Why TinyTales?</h2>
        <p className="mt-2 text-slate-600">A premium, playful studio designed for parents, teachers, and young creators.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, idx) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.15)]"
          >
            <f.icon className="mb-3 h-6 w-6 text-indigo-600" />
            <h3 className="font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
