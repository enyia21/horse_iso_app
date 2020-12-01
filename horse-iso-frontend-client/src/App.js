import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home from './containers/Home'
import User from './components/users/User'
import Users from './components/users/Users'
import UsersForm from './components/users/UsersForm'
import NavBar from './components/NavBar'
export class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/users/new' component={UsersForm} />
          <Route exact path='/users/:id' component={User} /> 
          <Route render={(props) => <div>gotcha mistakes</div>} />
        </Switch>  
      </div>
    </Router>
    ) 
  }
}

export default App

