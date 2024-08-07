import styles from "../page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
      <div className={styles.reference}>
      <h1 className={styles.gradienttext}>Reference</h1>
      <h2 className={styles.gradienttext}>API : News API</h2>
      <p>News API is used to populate news
cards in the UI of home page
 Search worldwide news with code Locate articles and breaking news headlines from news sources and blogs across the web with our JSON API</p>
      <a href="https://newsapi.org/">Visit Official Documentation</a>
      <h2 className={styles.gradienttext}>API : New York Times</h2>
      <p>New York Times API is used to populate articles in the UI of home. Our APIs (Application Programming Interfaces) allow you to programmatically access New York Times data for use in your own applications. Our goal is to facilitate a wide range of uses, from custom link lists to complex visualizations. Why just read the news when you can hack it?

NYT currently has ten public APIs: Archive, Article Search, Books, Most Popular, Semantic, Times Newswire, TimesTags, and Top Stories.</p>
      <a href="https://developer.nytimes.com/">Visit Official Documentation</a>
      <h2 className={styles.gradienttext}>API : The Gardians open platform</h2>
      <p>The Guardian API is used to
      populate blog in the UI of home. The Open Platform is a public web service for accessing all the content the Guardian creates, categorised by tags and section. To get started, You need an key to successfully authenticate against the API.</p>
      <a href="https://open-platform.theguardian.com/documentation/">Visit Official Documentation</a>
      <h2 className={styles.gradienttext}>API : Auth-0</h2>
      <p>Auth is used for authorization and
authentication for user based
interaction. Fine Grained Authorization that scales with you
Enable user collaboration and granular access control in your applications with easy-to-use APIs.</p>

      <a href="https://auth0.com/docs">Visit Official Documentation</a>

      {/* <pre><code id="code-block">
// Import the Axios library
import axios from 'axios';

// Function to handle GET requests
export async function GET(req) {
  const config = {
    method: 'get',
    url: 'https://newsapi.org/v2/everything?q=sustainable+blogs&sortBy=popularity&apiKey=YOUR_API_KEY',
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
    </code></pre> */}
      <h2 className={styles.gradienttext}>API : firebase</h2>
      <p>Firebase is a realtime database
and used for creation modifiatin of
blogs.
 Build & run modern, AI-powered experiences users love with Firebase, a platform designed to support you throughout your app development journey. Backed by Google and trusted by millions of businesses around the world.</p>
      <a href="https://firebase.google.com/docs">Visit Official Documentation</a>
      <br/>
      </div>
      </div>
    </main>
  );
}