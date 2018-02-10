import React from 'react'
// import axios from 'axios';

const Posts  = ({posts={}}) => (
      <div className="blog__container">
        {posts.image && (
          <img src={posts.image} alt="alt-tag" />
        )}
        <h2>{posts.title}</h2>
        {posts.content && (
          <p>posts.content</p>
        )}
        {posts.excerpt && (
          <p>{posts.excerpt}</p>
        )}
           {posts.categories && (
          <ul>
            {posts.categories.map(cat => <li key={cat}>{cat}</li>)}
          </ul>
          )}
      </div>
)
export default Posts
