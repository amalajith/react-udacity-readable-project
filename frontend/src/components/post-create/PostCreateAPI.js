import axios from 'axios'
import { v4 } from 'uuid'
import {POST_POSTS_API} from "../../utils/index"

export const createPost = (title, body, author, category) => {
    return axios.post(POST_POSTS_API, {
        id: v4(),
        timestamp: Math.floor(Date.now() /1000),
        title,
        body,
        author,
        category
    })
}