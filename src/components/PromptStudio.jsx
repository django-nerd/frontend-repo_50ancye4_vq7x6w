import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mic, Image as ImageIcon, Wand2 } from 'lucide-react';

const PromptStudio = () => {
  const [prompt, setPrompt] = useState('A friendly fox and a curious robot explore a candy forest.');
  const [age, setAge] = useState('5-7');
  const [tone, setTone] = useState('whimsical');
  const [uploadName, setUploadName] = useState('');

  const onUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) setUploadName(file.name);
  };

  const onRecord = () => {
    alert('Voice prompt recording is a premium feature.');
  };

  const onGenerate = () => {
    alert('This demo generates a playful preview – backend orchestration would create story, art, and narration.');
  };

  return (
    <section id="studio" className="relative mx-auto max-w-5xl px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_-15px_rgba(2,6,23,0.15)]"
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-manrope text-2xl font-bold text-slate-900">Story Studio</h2>
          <span className="text-sm text-slate-500">Child-safe by design</span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-4">
            <label className="block text-sm font-medium text-slate-700">Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={5}
              className="w-full rounded-xl border border-slate-300 bg-white/60 p-3 outline-none ring-indigo-500 transition focus:ring"
              placeholder="Describe your adventure..."
            />
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-slate-700">Age range</label>
                <select
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white p-2"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                >
                  <option>3-5</option>
                  <option>5-7</option>
                  <option>8-10</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Tone</label>
                <select
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white p-2"
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                >
                  <option value="whimsical">Whimsical</option>
                  <option value="adventurous">Adventurous</option>
                  <option value="soothing">Soothing</option>
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={onRecord}
                className="inline-flex items-center gap-2 rounded-xl bg-pink-500 px-4 py-2 text-white shadow-md shadow-pink-500/20 transition hover:bg-pink-600"
              >
                <Mic className="h-4 w-4" /> Voice Prompt
              </button>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-sky-500 px-4 py-2 text-white shadow-md shadow-sky-500/20 transition hover:bg-sky-600">
                <ImageIcon className="h-4 w-4" />
                <span>Upload Image</span>
                <input type="file" className="hidden" onChange={onUpload} />
              </label>
              {uploadName && <span className="text-sm text-slate-600">{uploadName}</span>}
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-indigo-50 to-pink-50 p-4">
            <div>
              <h3 className="mb-2 font-semibold text-slate-800">Preview</h3>
              <p className="text-sm text-slate-600">
                Set your preferences and generate a preview. The full app orchestrates story, images, and narration with
                cost-aware caching and child-safe filters.
              </p>
            </div>
            <button
              onClick={onGenerate}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
            >
              <Wand2 className="h-5 w-5" /> Generate Flipbook Preview
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PromptStudio;
