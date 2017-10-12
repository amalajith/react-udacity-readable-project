export const GET_CATEGORIES = 'GET_CATEGORIES'
export const POST_CREATE_SUCCESS = 'POST_CREATE_SUCCESS'
export const POST_EDIT_SUCCESS = 'POST_EDIT_SUCCESS'
export const GET_POSTS = 'GET_POSTS'
export const SORT_POSTS_TIME = 'SORT_POSTS_TIME'
export const SORT_POSTS_VOTESCORE = 'SORT_POSTS_VOTESCORE'
export const POST_UP_VOTE_SUCCESS = 'POST_UP_VOTE_SUCCESS'
export const POST_DOWN_VOTE_SUCCESS = 'POST_DOWN_VOTE_SUCCESS'
export const POST_DELETE_SUCCESS = 'POST_DELETE_SUCCESS'
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT  = 'ADD_COMMENT'

export const getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        categories
    }
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

export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts
    }
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

export const postDownVoteSuccess = (post) => {
    return {
        type: POST_DOWN_VOTE_SUCCESS,
        post
    }
}

export const postDeleteSuccess = (post) => {
    return {
        type: POST_DELETE_SUCCESS,
        post
    }
}

export const getComments = (comments) => {
    return {
        type: GET_COMMENTS,
        comments
    }
}

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

