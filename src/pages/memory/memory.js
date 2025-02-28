import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Memory() {
  const [searchParams] = useSearchParams();

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
          window.location.href = "/";
        })
        .catch((err) => console.error("Error autenticando:", err));
    }
  }, [searchParams]);

  return (
    <div>
      <h1>Memoria Extendida</h1>
      <p>Esperando autenticación con Google...</p>
    </div>
  );
}

export default Memory;

