import {Groq} from "groq-sdk";

const GROQ_API = import.meta.env.VITE_GROQ;

const groq = new Groq({
  apiKey: GROQ_API,
  dangerouslyAllowBrowser: true,
});

export const requestToGroqAI = async (content) => {
    const reply = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content,
            },
        ],
        model: "qwen-2.5-coder-32b",
    });
    return reply.choices[0].message.content;
}
