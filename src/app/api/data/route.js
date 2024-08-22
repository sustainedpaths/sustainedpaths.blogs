// pages/index.js or pages/sustainable-blogs.js (wherever your component is used)

import First from '../components/First'; // Ensure correct import path
import axios from 'axios';

export async function getStaticProps() {
    const config = {
        method: 'GET',
        url: 'https://newsapi.org/v2/everything?q=sustainable+blogs&sortBy=popularity&apiKey=f00b666b229046038485058bab3ed9e2',
    };

    try {
        const res = await axios.request(config);
        const articles = res.data.articles;

        return {
            props: {
                articles, // Pass the articles to the component as props
            },
            revalidate: 60, // Revalidate the page every 60 seconds
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                articles: [], // Pass an empty array on error
            },
            revalidate: 60, // Revalidate the page every 60 seconds even on error
        };
    }
}

const BlogPage = ({ articles }) => {
    return (
        <First articles={articles} />
    );
};

export default BlogPage;
