const gTTS = require('gtts');
const fs = require('fs');
const path = require('path');

async function toSpeech(text) {
  const filename = `audio_${Date.now()}.mp3`;
  const filepath = path.join(__dirname, '../audio/cache/', filename);
  return new Promise((resolve, reject) => {
    const gtts = new gTTS(text, 'sw');
    gtts.save(filepath, err => {
      if (err) reject(err);
      else resolve(filepath);
    });
  });
}

module.exports = { toSpeech };
