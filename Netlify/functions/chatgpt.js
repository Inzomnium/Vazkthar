const { Configuration, OpenAIApi } = require("openai");

exports.handler = async (event) => {
  try {
    // Extraemos el prompt del body
    const { prompt } = JSON.parse(event.body);

    // Configuramos OpenAI con la API key
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // Llamada a la API de ChatGPT
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
};
