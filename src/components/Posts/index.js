import React from 'react'
// import axios from 'axios';
import './styles.scss'

const Posts  = ({posts={}}) => (
      <div className="blog__container">
        {posts.image && (
          <img className="blog__container--feat img-responsive " src={posts.image} alt="alt-tag" />
        )}
        <h2 className="blog__container--title">{posts.title}</h2>
        {posts.content && (
          <p className="blog__container--content">posts.content</p>
        )}
        {posts.excerpt && (
          <p className="blog__container--excerpt">{posts.excerpt}</p>
        )}
           {posts.categories && (
          <ul className="blog__container--cat">
            {posts.categories.map(cat => <li key={cat}>{cat}</li>)}
          </ul>
          )}
      </div>
)
export default Posts
