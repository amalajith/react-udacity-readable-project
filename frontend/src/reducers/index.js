import { combineReducers } from 'redux'
import {FILTER_POSTS, FILTER_POSTS_CATEGORY, GET_CATEGORIES, GET_POSTS} from "../actions/index"

function categories(state = [], action){
    switch(action.type) {
        case GET_CATEGORIES:
            return action.categories
        default:
            return state
    }
}

function posts(state = [], action){
    switch(action.type){
        case GET_POSTS:
            return action.posts
        default:
            return state
    }
}

function filteredPosts(state = [], action){
    switch(action.type){
        case FILTER_POSTS_CATEGORY:
            const posts = action.posts.slice(0)
            const category = action.category
            return posts.filter(post => post.category === category)
        default:
            return state
    }
}

export default combineReducers({
    categories,
    posts,
    filteredPosts
})
