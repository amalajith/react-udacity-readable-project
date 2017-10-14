import axios from 'axios'
import {BASE_URL} from "../../utils/index"

export const deleteComment = (commentId) => {
    return axios.delete(`${BASE_URL}/comments/${commentId}`)
}

export const editComment = (commentId, body) => {
    return axios.put(`${BASE_URL}/comments/${commentId}`,{
        timestamp: Math.round(Date.now()),
        body
    })
}