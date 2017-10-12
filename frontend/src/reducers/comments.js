import {ADD_COMMENT, GET_COMMENTS} from "../actions/index"

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
        default:
            return state
    }
}

export default comments