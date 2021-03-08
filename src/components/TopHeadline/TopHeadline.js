import axios from 'axios';
import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    let [articles, setArticles] = useState([]);
    useEffect(() => {
        let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=f55ef1afd20f4ef593aee264c141f0ca';
        //axios library used for data fetching here

        axios.get(url)
            .then((responseJsonObject) => setArticles(responseJsonObject.data.articles))    // JSON Object is given
            .catch((error) => console.log(error));  //handle error

        //     fetch(url)
        //         .then(response => response.json())
        //         .then(data => setArticles(data.articles))
    }, []);
    console.log(articles);
    return (
        <div className='d-flex flex-column'>
            <h1 className="text-center">Total Headlines: {articles.length}</h1>
            {
                articles.map((article) => {
                    return <News article={article} className='justify-content-center'></News>
                })
            }
        </div>
    );
};

export default TopHeadline;