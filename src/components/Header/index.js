import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom';

import FontAwesome from 'react-fontawesome'
import './styles.scss'

let BRAND = "el.puas";

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }
    handleStateChange(state) {
    this.setState({menuOpen: state.isOpen})
  }
  closeMenu() {
    this.setState({menuOpen: false})
  }
  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen})
  }
  render() { // Why the props work if calling like this?
      return (
      <header>
        <h1 className="header__logo">{BRAND}</h1>
        <Menu
        right
        bodyClassName={ "header__nav--container" }
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}
        >
          <main>
            <ul>
              <li><Link to="/" onClick={() => this.closeMenu()}>Home</Link></li>
              <li><Link to="/profile" onClick={() => this.closeMenu()}>Profile</Link></li>
              <li><Link to="/works" onClick={() => this.closeMenu()}>Works</Link></li>
              <li><Link to="/blog" onClick={() => this.closeMenu()}>Blog</Link></li>
            </ul>
            <div className="header__contact">
                <h2>Contact:</h2>
                <ul>
                  <li><FontAwesome name="github" size="2x" /></li>
                  <li><FontAwesome name="wordpress" size="2x" /></li>
                  <li><FontAwesome name="linkedin" size="2x" /></li>
                  <li><FontAwesome name="twitter" size="2x" /></li>
                  <li><FontAwesome name="envelope" size="2x" /></li>
                </ul>
            </div>
          </main>
        </Menu>
      </header>
    )
  }
}
