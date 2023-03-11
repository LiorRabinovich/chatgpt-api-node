require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config);

async function sendToChatGPT(message) {
    const response = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
            { role: 'user', content: message }
        ]
    })
    return response;
}

(async () => {
    const response = await sendToChatGPT('מתי הוקמה מדינת ישראל?');
    console.log(response.data.choices[0]);
})()