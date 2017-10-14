import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Home from "./containers/home/Home"
import Posts from "./containers/posts/Posts"
import PostDetail from "./containers/post-detail/PostDetail"
import PostCreate from "./containers/post-create/PostCreate"
import PostEdit from "./containers/post-edit/PostEdit"

class App extends Component {
  render() {
    return (
      <div>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/create-post' component={PostCreate} />
              <Route path='/edit-post/:postId' component={PostEdit}  />
              <Route exact path='/:category' component={Posts} />
              <Route path='/:category/:postId' component={PostDetail} />
          </Switch>
      </div>
    )
  }
}

export default App;
