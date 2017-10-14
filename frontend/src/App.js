import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import './App.css';
import Home from "./containers/home/Home"
import Posts from "./containers/posts/Posts"
import PostDetail from "./containers/post-detail/PostDetail"
import PostCreate from "./containers/post-create/PostCreate"
import PostEdit from "./containers/post-edit/PostEdit"
import {getCategoriesFromApi, getPostsFromApi} from "./actions/index"

class App extends Component {

    componentDidMount() {
        this.handleGetCategories()
        this.handleGetPosts()
    }

    handleGetCategories = () => {
        this.props.dispatch(getCategoriesFromApi())
    }

    handleGetPosts = () => {
        this.props.dispatch(getPostsFromApi())
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/create-post' component={PostCreate}/>
                    <Route path='/edit-post/:postId' component={PostEdit}/>
                    <Route exact path='/:category' component={Posts}/>
                    <Route path='/:category/:postId' component={PostDetail}/>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts, sortType}) => ({
    categories,
    posts,
    sortType
})

export default withRouter(connect(mapStateToProps)(App));
