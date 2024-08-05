import axios from 'axios';

export async function GET(req) {
  const config = {
    method: 'get',
    url: 'https://content.guardianapis.com/search?api-key=0595efef-d5b5-4c77-92ce-2b11a75b4145&q=Sustanable+development',
  };

  try {
    const response = await axios.request(config);
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Internal Server Error', error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
