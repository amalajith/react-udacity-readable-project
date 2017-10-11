import axios from 'axios'
import { v4 } from 'uuid'
import {BASE_URL, GET_COMMENTS_API, POST_COMMENT_API} from "../../utils/index"

export const addComment = (parentId, body, author) => {
    return axios.post(POST_COMMENT_API, {
        id: v4(),
        timestamp: Math.floor(Date.now() /1000),
        body,
        author,
        parentId
    })
}

export const getComments = (parentId) => {
    return axios.get(`${BASE_URL}/posts/${parentId}/comments`)
}