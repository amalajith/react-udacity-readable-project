export const GET_CATEGORIES = 'GET_CATEGORIES'
export const GET_POSTS = 'GET_POSTS'
export const FILTER_POSTS_CATEGORY = 'FILTER_POSTS_CATEGORY'
export const FILTER_POSTS_VOTESCORE = 'FILTER_POSTS_VOTESCORE'
export const FILTER_POSTS_TIME = 'FILTER_POSTS_TIME'

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

export const filterPostsCategory = (posts, category) => {
    return {
        type: FILTER_POSTS_CATEGORY,
        category,
        posts
    }
}

export const filterPostsVotescore = (posts) => {
    return {
        type: FILTER_POSTS_VOTESCORE,
        posts
    }
}

export const filterPostsTime = (posts) => {
    return {
        type: FILTER_POSTS_TIME,
        posts
    }
}