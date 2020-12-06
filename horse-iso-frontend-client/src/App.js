import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import  Home from './containers/Home'
import User from './components/users/User'
import Users from './components/users/Users'
import UsersForm from './components/users/UsersForm'
import NavBar from './components/NavBar'
import UserLogin from './components/users/UserLogin'
import {connect} from 'react-redux'

import {fetchUsers} from './actions/users'
export class App extends Component {
  componentDidMount(){
    this.props.fetchUsers();
  }
  render() {
    return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={ Users } />
          <Route exact path='/users/new' component={UsersForm} />
          <Route exact path='/users/:id' component={User} /> 
          <Route exact path='/login' component={UserLogin} />
          <Route render={(props) => <div>gotcha mistakes</div>} />
        </Switch>  
      </div>
    </Router>
    ) 
  }
}


export default connect(null, { fetchUsers })(App);

