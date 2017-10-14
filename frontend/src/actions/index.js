import {
    ADD_COMMENT, COMMENT_DELETE_SUCCESS, COMMENT_EDIT_SUCCESS,
    GET_CATEGORIES_SUCCESS, GET_COMMENTS, GET_POSTS_SUCCESS, POST_CREATE_SUCCESS, POST_DELETE_SUCCESS, POST_DOWN_VOTE_SUCCESS,
    POST_EDIT_SUCCESS,
    POST_UP_VOTE_SUCCESS,
    SORT_POSTS_TIME,
    SORT_POSTS_VOTESCORE
} from "./types"

import * as API from '../utils/index'

export const getCategoriesSuccess = (categories) => {
    return {
        type: GET_CATEGORIES_SUCCESS,
        categories
    }
}

export const getCategoriesFromApi = () => dispatch => {
    API.getCategories()
        .then(res => {
            if (res.status === 200) {
                const categories = res.data.categories
                dispatch(getCategoriesSuccess(categories))
            }
        })
}

export const getPostsSuccess = (posts) => {
    return {
        type: GET_POSTS_SUCCESS,
        posts
    }
}

export const getPostsFromApi = () => dispatch => {
    API.getPosts()
        .then(res => {
            if(res.status === 200){
                const posts = res.data
                dispatch(getPostsSuccess(posts))
                posts.map(post => dispatch(getCommentsFromApi(post.id)))
            }
        })
}


export const postEditSuccess = (post) => {
    return {
        type: POST_EDIT_SUCCESS,
        post
    }
}

export const postCreateSuccess = (post) => {
    return {
        type: POST_CREATE_SUCCESS,
        post
    }
}

export const addPostToApi = ({ title, body, author, category}) => dispatch => {
    API.createPost(title,body,author, category)
        .then(res => {
            if(res.status === 200){
                const post = res.data
                dispatch(postCreateSuccess(post))
            }
        })
}

export const sortPostsByTime = () => {
    return {
        type: SORT_POSTS_TIME,
    }
}

export const sortPostsByVote = () => {
    return {
        type: SORT_POSTS_VOTESCORE,
    }
}

export const postUpVoteSuccess = (post) => {
    return {
        type: POST_UP_VOTE_SUCCESS,
        post
    }
}

export const postUpVoteToApi = (postId) => dispatch => {
    API.upVotePost(postId)
        .then(res => {
            if(res.status === 200){
                const post = res.data
                dispatch(postUpVoteSuccess(post))
            }
        })
}

export const postDownVoteSuccess = (post) => {
    return {
        type: POST_DOWN_VOTE_SUCCESS,
        post
    }
}

export const postDownVoteToApi = (postId) => dispatch => {
    API.downVotePost(postId)
        .then(res => {
            if(res.status === 200){
                const post = res.data
                dispatch(postDownVoteSuccess(post))
            }
        })
}

export const postDeleteSuccess = (post) => {
    return {
        type: POST_DELETE_SUCCESS,
        post
    }
}

export const deletePostFromApi = (postId) => dispatch => {
    API.deletePost(postId)
        .then(res => {
            const post = res.data
            dispatch(postDeleteSuccess(post))
        })
}

export const getComments = (comments) => {
    return {
        type: GET_COMMENTS,
        comments
    }
}

export const getCommentsFromApi = (postId) => dispatch => {
    API.getComments(postId)
        .then(res=> {
            if(res.status === 200){
                const comments = res.data
                dispatch(getComments(comments))
            }
        })
}

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export const addCommentToApi = (postId, body, author) => dispatch => {
    API.addComment(postId, body, author)
        .then(res => {
            if(res.status === 200){
                const comment  = res.data
                dispatch(addComment(comment))
            }
        })
}



export const commentEditSuccess = (comment) => {
    return {
        type: COMMENT_EDIT_SUCCESS,
        comment
    }
}

export const commentDeleteSuccess = (comment) => {
    return {
        type: COMMENT_DELETE_SUCCESS,
        comment
    }
}

