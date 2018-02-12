import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typist from 'react-typist';
import Carousel from '../Carousel';
import Posts from '../Posts';

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
        <div className="container__block--yellow"></div>
        <Carousel title="work" />
        <div className="home__blog--container">
        <Posts className="home__blog--hero-post"
          posts={{
            image:"http://facetheforce.today/random/400?r=2",
            title:"This is my title",
            excerpt:"Here Bitch Some Excerpt",
          }}
           />
         <Posts className="home__blog--hero-post"
             posts={{
               title:"This is my title secondary",
               excerpt:"Here Bitch Some More Excerpt",
             }}
            />
        </div>
      </div>
    )

export default Home
