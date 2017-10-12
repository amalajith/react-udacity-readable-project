import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from "./components/home/Home"
import Posts from "./components/posts/Posts"
import PostDetail from "./components/post-detail/PostDetail"
import PostCreate from "./components/post-create/PostCreate"

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/:category/posts' component={Posts} />
              <Route path='/posts/:postId' component={PostDetail} />
              <Route path='/create-post' component={PostCreate} />
          </Switch>
      </div>
    );
  }
}

export default App;
