import React from 'react';
import RadioPlayer from './components/RadioPlayer';

export default function App() {
  return (
    <div className="p-8 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-4">📻 Kiswahili AI Radio</h1>
      <RadioPlayer />
    </div>
  );
}
