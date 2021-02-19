import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import * as data from './assets/posts.json';

export default function Posts() {

    const renderers = {
        code: ({language, value}) => {
          return <SyntaxHighlighter language={language} children={value} />
        }
      }

    let content;
    if (data.posts.length > 0) {
        content = data.posts.map((post, id) => 
            <div className="post-bkg" key={id}>
                <h1>{post.postName}</h1>
                <ReactMarkdown renderers={renderers} children={post.content} />
            </div>
        )
    } else {
        content = (
            <div className="">
                <h2>No Posts found</h2>
            </div>
        )
    }

    return (
        <div className="">
            <h1>Hello from the posts component!</h1>
            {content}
        </div>
    )
}
