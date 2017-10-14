import axios from 'axios'
import { v4 } from 'uuid'
axios.defaults.headers.common['Authorization'] = 'abcdef'

export const BASE_URL = 'http://localhost:3001'

export const getCategories  = () => {
    return axios.get(`${BASE_URL}/categories`)
}

export const getPosts = () => {
    return axios.get(`${BASE_URL}/posts`)
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

export const addComment = (parentId, body, author) => {
    return axios.post(`${BASE_URL}/comments`, {
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

export const createPost = (title, body, author, category) => {
    return axios.post(`${BASE_URL}/posts`, {
        id: v4(),
        timestamp: Math.floor(Date.now()),
        title,
        body,
        author,
        category
    })
}