import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles.scss'

const Blog = ({ title, post={} }) => (
  <Grid className="blog__container">
    <Row>
      <Col xs>
        <div>
        <h1>{title}</h1>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.excerpt}</p>
        </div>
      </Col>
    </Row>
  </Grid>
)

export default Blog
