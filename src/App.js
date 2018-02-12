import React, { Component } from 'react';
import Home from './components/Home';
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Home
        title="el.puas"
        hero="Full Stack Designer &amp; Front-End Dev, I’m a Web Artisan and WordPress Wrangler"
        subtitle="what i do"
        subhero={{items:["User Experience","Design.", "eCommerce.", "WordPress Expertise.", "Front-End.", "Mobile."]}}
         />
       <Footer />
      </div>
    );
  }
}

export default App;
