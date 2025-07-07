const { Configuration, OpenAIApi } = require('openai');
const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

async function generateIntro(topic) {
  const prompt = `Andika utangulizi mfupi wa mtangazaji wa redio kwa Kiswahili kuhusu: ${topic}`;
  const res = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt,
    max_tokens: 60,
  });
  return res.data.choices[0].text.trim();
}

module.exports = { generateIntro };
