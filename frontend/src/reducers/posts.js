import {GET_POSTS, POST_CREATE_SUCCESS, SORT_POSTS_TIME, SORT_POSTS_VOTESCORE} from "../actions/index"

const initialPostsState = []

function posts(state = initialPostsState, action){
    switch(action.type){
        case GET_POSTS:
            return action.posts
        case POST_CREATE_SUCCESS:
            return [
                ...state,
                action.post
            ]
        case SORT_POSTS_VOTESCORE:
            return state.slice().sort((a,b) => a.voteScore < b.voteScore)
        case SORT_POSTS_TIME:
            return state.slice().sort((a,b) => a.timestamp < b.timestamp)
        default:
            return state
    }
}

export default posts