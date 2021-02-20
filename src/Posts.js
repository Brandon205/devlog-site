import React from 'react';
import {Link} from 'react-router-dom';
import defaultImage from './assets/images/defaultImage.png';
import * as data from './assets/posts.json';

export default function Posts() {
    let content;
    if (data.posts.length > 0) {
        content = data.posts.map((post, id) => 
            <div className="post-bkg" key={id}>
                <img src={defaultImage} alt="image of code" className="snippet-img" />
                <h1>{post.postName}</h1>
                <p>{post.snippet + ".."}</p>
                <Link to={"/post?" + post.postId} className="read-more">...read more</Link>
            </div>
        )
    }

    return (
        <div>
            <h1>Recent Posts</h1>
            {content ? content : <h1>Whoopsies looks like there was a problemo</h1>}
        </div>
    )
}
