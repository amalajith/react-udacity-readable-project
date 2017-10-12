import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as moment from 'moment'

export default class CommentItem extends Component {
    render(){

        const { body, author, timestamp } = this.props

        return(
            <div>
                <h3>{body}</h3>
                <p>by {author} on {moment(timestamp).format("DD-MM-YYYY h:mm:ss")}</p>
            </div>
        )
    }
}

CommentItem.propTypes = {
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
}