import fetch from 'node-fetch';

export async function handler(event) {
  const romUrl = 'https://archive.org/download/pokemon_emerald-version-u/Pokemon%20-%20Emerald%20Version%20%28U%29.gba';
  const response = await fetch(romUrl);
  const buffer = await response.arrayBuffer();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/octet-stream',
      'Access-Control-Allow-Origin': '*',
    },
    body: Buffer.from(buffer).toString('base64'),
    isBase64Encoded: true
  };
}
