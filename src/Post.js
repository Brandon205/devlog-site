import React from 'react';
import ReactMarkdown from 'react-markdown';
import * as data from './assets/posts.json';

export default function Post(props) {

    const postId = parseInt(props.location.search.substring(1));
    let content;
    if (data.posts.length >= postId) {
        let post = data.posts[postId]
        content = (
            <div className="post-single">
                <h1>{post.postName}</h1>
                <ReactMarkdown>{post.snippet + " " + post.content}</ReactMarkdown>
            </div>
        )
    } else {
        content = (
            <div>
                <h1>Something got flipturnedupsidedown...</h1>
            </div>
        )
    }

    return (
        <div className="App">
            {content}
        </div>
    )
}
