const fs = require('fs');
const path = require('path');
const gpt = require('./gpt_dj');
const tts = require('./tts');
const news = require('./fetchers/news');
const jokes = require('./fetchers/jokes');

let currentContent = { title: '', category: '', filename: '' };

function getCurrentContent() {
  return currentContent;
}

async function generateContent() {
  const hour = new Date().getHours();
  let category;

  if (hour < 12) category = 'news';
  else if (hour < 18) category = 'music';
  else category = 'jokes';

  let contentText, title;

  if (category === 'news') {
    contentText = await news.fetch();
    title = 'Habari za Kiswahili';
  } else if (category === 'jokes') {
    contentText = await jokes.fetch();
    title = 'Kipindi cha Vichekesho';
  } else {
    contentText = 'Karibu usikilize muziki maarufu sasa hivi!';
    title = 'Muziki wa Kisasa';
  }

  const intro = await gpt.generateIntro(title);
  const audioPath = await tts.toSpeech(`${intro} ${contentText}`);

  currentContent = {
    title,
    category,
    filename: path.basename(audioPath),
  };
}

function startScheduler() {
  generateContent();
  setInterval(generateContent, 1000 * 60 * 60); // every hour
}

module.exports = { startScheduler, getCurrentContent };
