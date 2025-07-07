import React, { useEffect, useState } from 'react';

export default function RadioPlayer() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const res = await fetch('http://localhost:3001/now-playing');
      const data = await res.json();
      setContent(data);
    };
    fetchContent();
    const interval = setInterval(fetchContent, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p className="text-lg">Kinachochezwa: <strong>{content?.title}</strong></p>
      <audio src={`http://localhost:3001/audio/${content?.filename}`} controls autoPlay />
      <a
        href={`https://wa.me/?text=${encodeURIComponent(`Sikiliza Kiswahili AI Radio hapa 📻: http://localhost:5173`)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-green-600 text-white rounded"
      >
        🟢 Shiriki kwenye WhatsApp
      </a>
    </div>
  );
}
