import React from 'react'
import Posts from '../Posts'

import { Grid, Row, Col } from 'react-flexbox-grid'
import './styles.scss'

const Blog = () => (
  <Grid className="blog__container">
    <Row>
      <Col xs>
        <Posts
          posts={{
            image:"",
            title:"This is My Blog Page",
            content:"Here all my blog post will be fetch",
          }}
           />
      </Col>
    </Row>
  </Grid>
)

export default Blog
