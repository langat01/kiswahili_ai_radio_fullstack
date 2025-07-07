const Parser = require('rss-parser');
const parser = new Parser();

async function fetch() {
  const feed = await parser.parseURL('https://www.bbc.com/swahili/index.xml');
  return feed.items[0]?.title + ' - ' + feed.items[0]?.contentSnippet;
}

module.exports = { fetch };