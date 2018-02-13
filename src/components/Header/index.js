import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import Nav from './navigation'

import FontAwesome from 'react-fontawesome'
import './styles.scss'

let BRAND = "el.puas";

export default class Header extends React.Component {
  render() { // Why the props work if calling like this?
      return (
      <header>
        <h1 className="header__logo">{BRAND}</h1>
        <Menu right bodyClassName={ "header__nav--container" }>
          <main>
            <Nav />
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
