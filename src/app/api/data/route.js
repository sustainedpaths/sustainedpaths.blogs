import axios from 'axios';

export async function GET(req) {
  const config = {
    method: 'get',
    url: 'https://newsapi.org/v2/everything?q=sustainable+blogs&sortBy=popularity&apiKey=f00b666b229046038485058bab3ed9e2',
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
