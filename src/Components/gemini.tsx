import OpenAI from 'openai';
import { gptApiKey } from '../Utils/Const';

const client = new OpenAI({
  apiKey: gptApiKey,
  baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
  dangerouslyAllowBrowser: true,
});

export default client;