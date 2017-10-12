import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from "../comment-item/CommentItem"

class CommentList extends Component {
    render(){

        const { comments } = this.props

        return(
            <div>
                <h3>Comments</h3>
                {comments.length > 0 ? (
                    <div>
                        {comments.map(comment => (
                            <CommentItem key={comment.id}
                                         body={comment.body}
                                         author={comment.author}
                                         timestamp={comment.timestamp}
                            />
                        ))}
                    </div>
                ) : (
                    <div>
                        <p>No comments available</p>
                    </div>
                )}
            </div>
        )
    }
}

export default CommentList

CommentList.propTypes = {
    comments: PropTypes.array.isRequired
}