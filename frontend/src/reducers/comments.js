import {GET_COMMENTS} from "../actions/index"

const initialCommentsState = []

function comments(state = initialCommentsState, action){
    switch(action.type){
        case GET_COMMENTS:
            return action.comments
        default:
            return state
    }
}

export default comments