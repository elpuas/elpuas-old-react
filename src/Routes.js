import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import Works from './components/Works'
import Blog from './components/Blog'

const Routes = () => (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/works' component={Works}/>
      <Route path='/blog' component={Blog}/>
    </Switch>
)

export default Routes
