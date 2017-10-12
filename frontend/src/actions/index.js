export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const SORT_POSTS_TIME = 'SORT_POSTS_TIME'
export const SORT_POSTS_VOTESCORE = 'SORT_POSTS_VOTESCORE'

export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT  = 'ADD_COMMENT'

export const getCategories = (categories) => {
    return {
        type: GET_CATEGORIES,
        categories
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

