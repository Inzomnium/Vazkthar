const { google } = require("googleapis");

exports.handler = async (event) => {
  try {
    // Extraemos los datos del body:
    // tokens: el objeto con el access_token y refresh_token
    // docId: el ID del Google Doc donde quieres escribir
    // text: el texto que deseas insertar
    const { tokens, docId, text } = JSON.parse(event.body);

    // Leemos las credenciales desde la variable de entorno
    const credentials = JSON.parse(process.env.GG_CRED);
    const { client_id, client_secret, redirect_uris } = credentials.web;

    // Creamos el cliente OAuth2 y le inyectamos los tokens que obtuviste antes
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    oAuth2Client.setCredentials(tokens);

    // Inicializamos la API de Google Docs con las credenciales
    const docs = google.docs({ version: "v1", auth: oAuth2Client });

    // Llamamos a la API para insertar texto al inicio del documento (index: 1)
    const response = await docs.documents.batchUpdate({
      documentId: docId,
      requestBody: {
        requests: [
          {
            insertText: {
              location: {
                index: 1, // Ubicación en el documento donde se insertará el texto
              },
              text,
            },
          },
        ],
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        response,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
