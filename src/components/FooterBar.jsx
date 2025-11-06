import React from 'react';
import { Github, Mail } from 'lucide-react';

const FooterBar = () => {
  return (
    <footer className="border-t border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} TinyTales. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 hover:text-slate-900">
            <Mail className="h-4 w-4" /> Contact
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-slate-900">
            <Github className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
