import {GET_CATEGORIES_SUCCESS} from "../actions/types"

const initialCategoriesState = []

function categories(state = initialCategoriesState, action){
    switch(action.type) {
        case GET_CATEGORIES_SUCCESS:
            return action.categories
        default:
            return state
    }
}

export default categories