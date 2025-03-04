import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const generateTextResponse = async (text) => {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo", 
            messages: [{ role: "system", content: `You are a highly knowledgeable tutor specializing in science,math,education and technology. 
                      Your goal is to help students by providing clear, accurate, and subject-related answers.Keep responses educational, concise, and engaging.` },
                { role: "user", content: text }],
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("OpenAI Text Response Error:", error);
        return "Sorry, I couldn't process your request.";
    }
};

//this function is used to generate a text response using OpenAI's GPT-3 model
//it takes the user's text input and generates a response based on the input
//here we use openai api key to generate the response and that key is stored in the .env file
