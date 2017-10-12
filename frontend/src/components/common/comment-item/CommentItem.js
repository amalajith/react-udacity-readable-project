import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CommentItem extends Component {
    render(){

        const { body, author } = this.props

        return(
            <div>
                <h2>{body}</h2>
                <p>by {author}</p>
            </div>
        )
    }
}

CommentItem.propTypes = {
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}