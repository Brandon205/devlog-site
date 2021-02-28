import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from './assets/images/defaultImage.png';
import * as data from './assets/posts.json';

export default function Posts() {
    let content;
    if (data.posts.length > 0) {
        content = data.posts.map((post, id) => 
            <div className="post-bkg" key={id}>
                <div className="post-image">
                    <img src={defaultImage} alt="image of code" className="snippet-img" />
                </div>
                <div className="post-content">
                    <h1 className="post-name">{post.postName}</h1>
                    <h3 className="post-tags">{post.tags}</h3>
                    <h5 className="post-date">{post.date}</h5>
                    <p className="post-snippet">{post.snippet + ".."}</p>
                    <Link to={"/post?" + post.postId} className="read-more">Continue Reading</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="large-heading">Recent Posts</h1>
            {content ? content : <h1>Whoopsies looks like there was a problemo</h1>}
        </div>
    )
}
