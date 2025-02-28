import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Memory() {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");
    if (code) {
      fetch("/.netlify/functions/google-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Tokens recibidos:", data);
          alert("Autenticación exitosa");
          window.location.href = "/";
        });
    }
  }, [searchParams]);

  return <div>Autenticando Google Docs...</div>;
}

export default Memory;
