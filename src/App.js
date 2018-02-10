import React, { Component } from 'react';
//import logo from './logo.svg';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Posts from './components/Posts';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home
        title="el.puas"
        hero="Full Stack Designer & Front-End Dev, I’m a Web Artisan and WordPress Wrangler"
        subtitle="what i do"
        subhero={{items:["User Experience","Design.", "eCommerce.", "WordPress Expertise.", "Front-End.", "Mobile."]}}
         />
        <div className="container__block--yellow"></div>
        <Carousel title="work" />
        <Posts className="home__blog-hero-post"
          posts={{
            image:"http://facetheforce.today/random/400?r=2",
            title:"This is my title",
            excerpt:"Here Bitch Some Excerpt",
          }}
           />
         <Posts className="home__blog-hero-secondary"
             posts={{
               title:"This is my title secondary",
               excerpt:"Here Bitch Some More Excerpt",
             }}
            />
      </div>
    );
  }
}

export default App;
