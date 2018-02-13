import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Typist from 'react-typist';
import Carousel from '../Carousel';
import Posts from '../Posts';

import './styles.scss'

const Content = {
  'title': 'elpuas',
  'hero': 'Full Stack Designer & Front-End Dev, I’m a Web Artisan and WordPress Wrangler',
  'subtitle':'what i do',
  'subhero': ["User Experience","Design.", "eCommerce.", "WordPress Expertise.",
   "Front-End.", "Mobile."],
}

const Home = () => (
      <div>
        <Grid className="home__first-paint">
          <Row>
            <Col xs>
              <h1>{Content.title}</h1>
              <h2><Typist>{Content.hero}</Typist></h2>
            </Col>
          </Row>
          <Row>
            <Col xs>
              <h2>{Content.subtitle}</h2>
              {Content.subhero && (
              <ul>
                {Content.subhero.map(item => <li key={item}>{item}</li>)}
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
