import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Blog = ({ title, post={} }) => (
  <Grid className="home__carousel">
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
