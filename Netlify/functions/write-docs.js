const { google } = require("googleapis");

exports.handler = async (event) => {
  try {
    // Extraemos del body de la solicitud:
    // - tokens: objeto con access_token, refresh_token, etc.
    // - docId: el ID del Google Doc donde queremos escribir
    // - text: el texto que deseamos insertar
    const { tokens, docId, text } = JSON.parse(event.body);

    // Parseamos las credenciales de Google desde la variable de entorno GG_CRED
    const credentials = JSON.parse(process.env.GG_CRED);
    const { client_id, client_secret, redirect_uris } = credentials.web;

    // Creamos el cliente OAuth2 e inyectamos los tokens obtenidos
    const oAuth2Client = new google.auth.OAuth2(
      client_id,
      client_secret,
      redirect_uris[0]
    );
    oAuth2Client.setCredentials(tokens);

    // Inicializamos la API de Google Docs
    const docs = google.docs({ version: "v1", auth: oAuth2Client });

    // Realizamos la petición para insertar texto en el documento.
    // Aquí se inserta el texto en la posición index 1 (al inicio del documento).
    const result = await docs.documents.batchUpdate({
      documentId: docId,
      requestBody: {
        requests: [
          {
            insertText: {
              location: {
                index: 1,
              },
              text: text,
            },
          },
        ],
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, result }),
    };
  } catch (error) {
    console.error("Error escribiendo en Google Docs:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
