import axios from 'axios';

export async function GET(req) {
  const config = {
    method: 'get',
    url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=sustainable+development&api-key=ka7FAHMFeVWurivVOMTmHK4WOiq1nEQz',
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
