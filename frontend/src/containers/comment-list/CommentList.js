import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentItem from "../../components/comment-item/CommentItem"
import * as CommentListAPI from './CommentListAPI'
import {commentDeleteSuccess, commentEditSuccess} from "../../actions/index"
import CommentEditFormModal from "../../components/comment-edit-form-modal/CommentEditFormModal"

class CommentList extends Component {

    state = {
        commentEdit: {
            id: '',
            body: ''
        },
        commentEditModal: {
            open: false
        }
    }

    handleCommentDelete = (comment) => {
        CommentListAPI.deleteComment(comment.id)
            .then(res => {
                const comment = res.data
                this.props.dispatch(commentDeleteSuccess(comment))
            })
    }

    handleCommentEdit = (comment) => {
        this.setState({
            commentEdit: {
                id: comment.id,
                body: comment.body
            },
            commentEditModal: {
                open: true
            }
        })
    }

    handleCommentEditValueChange = (e,data) => {
        const name = data.name
        const value = data.value
        this.setState({
            commentEdit: {
                ...this.state.commentEdit,
                [name]: value
            }
        })
    }

    handleCommentEditSubmit = () => {
        const { id, body } = this.state.commentEdit
        CommentListAPI.editComment(id,body)
            .then(res => {
                if(res.status === 200){
                    const comment = res.data
                    this.props.dispatch(commentEditSuccess(comment))
                    this.handleCommentEditModalClose()
                }
            })
    }

    handleCommentEditModalClose = () => {
        this.setState({
            commentEditModal: {
                open : false
            }
        })
    }

    render(){

        const { comments } = this.props
        const visibleComments = comments.filter(comment => !comment.deleted)

        return(
            <div>

                <CommentEditFormModal open={this.state.commentEditModal.open}
                                      onClose={this.handleCommentEditModalClose}
                                      onValueChange={this.handleCommentEditValueChange}
                                      onSubmit={this.handleCommentEditSubmit}
                                      body={this.state.commentEdit.body}
                />

                <h3>Comments</h3>

                {visibleComments.length > 0 ? (
                    <div>
                        {visibleComments.map(comment => (
                            <CommentItem key={comment.id}
                                         body={comment.body}
                                         author={comment.author}
                                         timestamp={comment.timestamp}
                                         onCommentDelete={() => this.handleCommentDelete(comment)}
                                         onCommentEdit={() => this.handleCommentEdit(comment)}
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

const mapStateToProps = ({ comments }) => ({
    comments
})

export default connect(mapStateToProps)(CommentList)
