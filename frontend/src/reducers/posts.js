import {
    GET_POSTS_SUCCESS, POST_CREATE_SUCCESS, POST_DELETE_SUCCESS, POST_DOWN_VOTE_SUCCESS, POST_EDIT_SUCCESS,
    POST_UP_VOTE_SUCCESS, SORT_POSTS_TIME,
    SORT_POSTS_VOTESCORE
} from "../actions/types"

const initialPostsState = []

function posts(state = initialPostsState, action){
    switch(action.type){
        case GET_POSTS_SUCCESS:
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
        case POST_UP_VOTE_SUCCESS:
            const upVotedPost = action.post
            return state.map(post => post.id === upVotedPost.id ? upVotedPost : post)
        case POST_DOWN_VOTE_SUCCESS:
            const downVotedPost = action.post
            return state.map(post => post.id === downVotedPost.id ? downVotedPost : post)
        case POST_EDIT_SUCCESS:
            const editedPost = action.post
            return state.map(post => post.id === editedPost.id ? editedPost : post)
        case POST_DELETE_SUCCESS:
            const deletedPost = action.post
            return state.map(post => post.id === deletedPost.id ? deletedPost : post)
        default:
            return state
    }
}

export default posts