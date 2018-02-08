import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import {Carousel} from 'react-materialize'
import './styles.scss'

const WorkSlider = ({title, altImage}) => (
  <Grid className="carousel__container">
  <Row>
      <Col xs>
      <Carousel options={{ fullWidth: true }} images={[
        	'http://facetheforce.today/random/400?r=1',
        	'http://facetheforce.today/random/400?r=2',
        	'http://facetheforce.today/random/400?r=3',
        	'http://facetheforce.today/random/400?r=4',
        	'http://facetheforce.today/random/400?r=5'
        ]} />
        <h2>{title}</h2>
      </Col>
    </Row>
  </Grid>
)

export default WorkSlider
