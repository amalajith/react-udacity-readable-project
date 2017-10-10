import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Home from "./components/home/Home"
import Posts from "./components/posts/Posts"

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/:category/posts' component={Posts} />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ categories, posts}, props) => ({
    categories,
    posts
})

export default App;
