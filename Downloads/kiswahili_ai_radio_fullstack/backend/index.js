const express = require('express');
const cors = require('cors');
const app = express();
const scheduler = require('./scheduler');
const path = require('path');

app.use(cors());
app.use('/audio', express.static(path.join(__dirname, '../audio/cache')));

app.get('/now-playing', (req, res) => {
  const nowPlaying = scheduler.getCurrentContent();
  res.json(nowPlaying);
});

app.listen(3001, () => {
  console.log('Kiswahili AI Radio backend running on http://localhost:3001');
  scheduler.startScheduler();
});
