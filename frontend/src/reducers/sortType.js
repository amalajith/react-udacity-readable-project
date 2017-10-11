import {SORT_POSTS_TIME, SORT_POSTS_VOTESCORE} from "../actions/index"

const currentSort = 'vote'

function sortType(state = currentSort, action){
    switch(action.type){
        case SORT_POSTS_TIME:
            return 'time'
        case SORT_POSTS_VOTESCORE:
            return 'vote'
        default:
            return state
    }
}

export default sortType