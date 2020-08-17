import React, {useState, useEffect } from 'react';
import axios from 'axios';
import './News.css';

const GlobalNews= () => {
    const [ recentNews, setRecentNews ]= useState([]);

    useEffect( () => {
        axios
            .all([
            axios.get("http://newsapi.org/v2/top-headlines?country=us&category=health&q=coronavirus&q=covid&apiKey=da14752fd01542e6984ad24c3d1cac3c")
            ])
            .then(responseArray => {
                setRecentNews(responseArray[0].data.articles);
            })
            .catch(err => {
                console.log(err);
            })
    });

       
    return (
        <div className="container">
            <br/>
            <br/>
            <h1 style={{fontWeight:"bold"}}> <i class="fa fa-newspaper-o" aria-hidden="true"></i> Global News Headlines </h1>
            <br/>
            <br/>

            {recentNews.filter( (data) => data.urlToImage!==null).map( (data) => (

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 mt-3">
                            <div class="card" id="example">
                                <div class="card-horizontal">
                                    <div class="img-square-wrapper">
                                        <a href={data.url} >
                                            <img class="newsimg" src={data.urlToImage} alt="news" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title" style={{fontWeight:"bold"}}> {data.title} </h4>
                                        <p class="card-text">{data.description} </p>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <small class="text-muted">Source: {data.source.name} | Author: {data.author} </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    )
    
}

export default GlobalNews;
