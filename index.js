import { env } from 'node:process'
import { Configuration, OpenAIApi } from 'openai'

if (!env.OPENAI_API_KEY) throw new Error('`OPENAI_API_KEY` environment variable must be set.')

const config = new Configuration({
  apiKey: env.OPENAI_API_KEY
})

const openai = new OpenAIApi(config)

const chat = await openai.createChatCompletion({
  model: 'gpt-3.5-turbo',
  messages: [
    { role: 'system', content: 'You are a knowledgeable assistant.' },
    { role: 'user', content: 'Give me a paragraph about the differences between black, oolong, and green teas.' }
  ]
})

console.dir(chat.config.data, { depth: null })
console.dir(chat.data, { depth: null })
console.log(JSON.stringify(chat.config.data))
console.log(JSON.stringify(chat.data))
