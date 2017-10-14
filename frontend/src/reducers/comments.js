import {ADD_COMMENT, COMMENT_DELETE_SUCCESS, COMMENT_EDIT_SUCCESS, GET_COMMENTS} from "../actions/types"

const initialCommentsState = []

function comments(state = initialCommentsState, action){
    switch(action.type){
        case GET_COMMENTS:
            return action.comments
        case ADD_COMMENT:
            return [
                ...state,
                action.comment
            ]
        case COMMENT_DELETE_SUCCESS:
            const deletedComment = action.comment
            return state.map(comment => comment.id === deletedComment.id ? deletedComment : comment)
        case COMMENT_EDIT_SUCCESS:
            const editedComment = action.comment
            return state.map(comment => comment.id === editedComment.id ? editedComment : comment)
        default:
            return state
    }
}

export default comments