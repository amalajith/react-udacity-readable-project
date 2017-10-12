import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as moment from 'moment'
import './CommentItem.css'

export default class CommentItem extends Component {
    render(){

        const { body, author, timestamp } = this.props

        return(
            <div className='comment'>
                <p className='commentBody'>{body}</p>
                <p className='commentMeta'>by {author} on {moment(timestamp).format("DD-MM-YYYY h:mm:ss")}</p>
            </div>
        )
    }
}

CommentItem.propTypes = {
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired
}