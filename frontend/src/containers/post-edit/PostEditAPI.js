import axios from 'axios'
import {BASE_URL} from "../../utils/index"

export const editPost = (id, title, body) => {
    return axios.put(`${BASE_URL}/posts/${id}`, {
        title,
        body
    })
}