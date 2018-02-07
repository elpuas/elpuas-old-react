import React, { Component } from 'react';
//import logo from './logo.svg';
import Home from './components/Home';
import Carousel from './components/Carousel';
import Blog from './components/Blog';
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
        <Carousel title="work" />
        <Blog title="words" post={{title:"Blog Title", excerpt:"This is the Excerpt"}}  />
      </div>
    );
  }
}

export default App;
  
