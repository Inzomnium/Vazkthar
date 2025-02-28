const { google } = require("googleapis");

exports.handler = async (event) => {
  // Extraemos el código de autorización que viene en el body de la solicitud
  const { code } = JSON.parse(event.body);

  // Parseamos la variable de entorno GG_CRED, que contiene el JSON de las credenciales
  const credentials = JSON.parse(process.env.GG_CRED);
  // Usamos las credenciales configuradas para una aplicación web
  const { client_id, client_secret, redirect_uris } = credentials.web;

  // Creamos el cliente OAuth2 utilizando la primera URL de redireccionamiento
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0] // Asegúrate que esta URL coincide con la configurada en Google Cloud (por ejemplo: https://vakzthar.com/memory)
  );

  try {
    // Intercambiamos el código de autorización por tokens
    const { tokens } = await oAuth2Client.getToken(code);
    return {
      statusCode: 200,
      body: JSON.stringify(tokens),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};