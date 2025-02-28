import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Memory() {
  const [searchParams] = useSearchParams();
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      fetch("/.netlify/functions/GoogleAuth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Tokens recibidos:", data);
          alert("Autenticación Exitosa");
          // Quitamos la redirección y en su lugar guardamos los tokens en el estado
          setTokens(data);
        })
        .catch((err) => console.error("Error autenticando:", err));
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Memoria Extendida</h1>
      {tokens ? (
        <>
          <p>¡Tokens obtenidos! Aquí tienes el access_token:</p>
          <pre>{tokens.access_token}</pre>
          {/* Aquí podrías crear un botón que use estos tokens para escribir en Google Docs */}
        </>
      ) : (
        <p>Esperando autenticación con Google...</p>
      )}
    </div>
  );
}

export default Memory;
