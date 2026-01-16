import OpenAI from 'openai';
import { gptApiKey } from '../Utils/Const';

const client = new OpenAI({
  apiKey: gptApiKey,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/"
});

const completion = await client.chat.completions.create({
  model: 'gemini-3-flash-preview',
  messages: [
    { role: 'developer', content: 'Talk like a pirate.' },
    { role: 'user', content: 'Are semicolons optional in JavaScript?' },
  ],
});

console.log(completion.choices[0].message.content);