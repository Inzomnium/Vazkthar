import { Configuration, OpenAIApi } from "openai";

export async function handler(event, context) {
  try {
    const { prompt } = JSON.parse(event.body);

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        content: response.data.choices[0].message.content,
      }),
    };
  } catch (error) {
    console.error("Error calling OpenAI:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
}
