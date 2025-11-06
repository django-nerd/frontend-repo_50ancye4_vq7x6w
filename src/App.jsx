import React from 'react';
import HeroCover from './components/HeroCover.jsx';
import PromptStudio from './components/PromptStudio.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import FooterBar from './components/FooterBar.jsx';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      {/* Hero with Spline cover */}
      <HeroCover />

      {/* Story prompt studio */}
      <PromptStudio />

      {/* Feature highlights */}
      <FeatureGrid />

      {/* Footer */}
      <FooterBar />
    </div>
  );
}

export default App;
