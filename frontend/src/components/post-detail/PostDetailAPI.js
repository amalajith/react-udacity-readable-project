import axios from 'axios'
import { v4 } from 'uuid'
import {BASE_URL, POST_COMMENT_API} from "../../utils/index"

export const addComment = (parentId, body, author) => {
    return axios.post(POST_COMMENT_API, {
        id: v4(),
        timestamp: Math.floor(Date.now()),
        body,
        author,
        parentId
    })
}

export const getComments = (parentId) => {
    return axios.get(`${BASE_URL}/posts/${parentId}/comments`)
}

export const upVotePost = (postId) => {
    return axios.post(`${BASE_URL}/posts/${postId}`,{
        option: 'upVote'
    })
}

export const downVotePost = (postId) => {
    return axios.post(`${BASE_URL}/posts/${postId}`,{
        option: 'downVote'
    })
}

export const deletePost = (postId) => {
    return axios.delete(`${BASE_URL}/posts/${postId}`)
}