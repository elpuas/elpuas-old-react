import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typist from 'react-typist';

import './styles.scss'
const Home = ({ title, hero, subtitle, subhero={} }) => (
      <div>
        {/* A JSX comment */}
        <Grid className="home__first-paint">
          <Row>
            <Col xs>
              <h1>{title}</h1>
              <h2><Typist>{hero}</Typist></h2>
            </Col>
          </Row>
          <Row>
            <Col xs>
              <h2>{subtitle}</h2>
              {subhero.items && (
              <ul>
                {subhero.items.map(item => <li key={item}>{item}</li>)}
              </ul>
              )}
            </Col>
          </Row>
        </Grid>
      </div>
    )

export default Home
