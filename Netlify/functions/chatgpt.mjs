import OpenAI from "openai";

export async function handler(event, context) {
  try {
    // Extraemos el prompt del body
    const { prompt } = JSON.parse(event.body);

    // Inicializamos la API de OpenAI usando el default export
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Llamamos a la API de ChatGPT usando la nueva estructura
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        content: response.choices[0].message.content,
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
