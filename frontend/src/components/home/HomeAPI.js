import axios from 'axios'
import {GET_CATEGORIES_API} from "../../utils/index"
axios.defaults.headers.common['Authorization'] = 'abcdef'

export const getCategories  = () => {
    return axios.get(GET_CATEGORIES_API)
}
