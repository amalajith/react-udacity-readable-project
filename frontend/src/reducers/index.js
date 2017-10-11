import { combineReducers } from 'redux'
import posts from './posts'
import categories from './categories'
import sortType from './sortType'
import comments from './comments'

export default combineReducers({
    categories,
    posts,
    sortType,
    comments
})
