import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroCover = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay that does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-manrope text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl"
        >
          TinyTales Flipbook Creator
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 max-w-2xl text-lg text-slate-700 sm:text-xl"
        >
          Turn simple ideas into magical, child-safe flipbooks with story, art, and narration.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#studio"
            className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
          >
            <Rocket className="h-5 w-5" /> Start Creating
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl bg-white/80 px-5 py-3 font-medium text-slate-900 backdrop-blur transition hover:bg-white"
          >
            <Sparkles className="h-5 w-5 text-indigo-600" /> See Features
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCover;
