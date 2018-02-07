import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './styles.scss'

const Carousel = ({title, altImage}) => (
  <Grid className="home__carousel">
    <Row>
      <Col xs>
        <div>
          <ul>
            <li>
              <img className="img-responsive" alt={altImage} src="http://facetheforce.today/random/400?r=2" />
            </li>
          </ul>
        </div>
        <h2>{title}</h2>
      </Col>
    </Row>
  </Grid>
)

export default Carousel
