"use client";
export default function GlobalError({ error, reset }) {
  console.error(error);
  return (
    <html>
      <body>
        <h2>Encontramos algum erro</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
