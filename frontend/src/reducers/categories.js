import {GET_CATEGORIES} from "../actions/index"

const initialCategoriesState = []

function categories(state = initialCategoriesState, action){
    switch(action.type) {
        case GET_CATEGORIES:
            return action.categories
        default:
            return state
    }
}

export default categories