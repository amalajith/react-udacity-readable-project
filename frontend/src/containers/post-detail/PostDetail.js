import React, { Component } from 'react'
import { Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Grid , Button, Icon, Divider, Message } from 'semantic-ui-react'
import PageHeader from '../../components/page-header/PageHeader'
import PostItemDetail from "../../components/post-item-detail/PostItemDetail"
import {
    deletePostFromApi,
    postDownVoteToApi,
    postUpVoteToApi,
    addCommentToApi
} from "../../actions/index"
import CommentForm from "../../components/comment-form/CommentForm"
import CommentList from "../comment-list/CommentList"
import ModalSuccess from "../../components/modal-success/ModalSuccess"

class PostDetail extends Component {

    state = {
        comment: {
            body: '',
            author: '',
        },
        postDeleteSuccessModal: {
            open: false,
            title: 'Post deleted',
            body: 'This post has been deleted. You will be redirected to the homepage'
        }
    }


    handleInputChange = (e,data) => {
        const name = data.name;
        const value = data.value;
        this.setState({
            comment: {
                ...this.state.comment,
                [name] : value
            }
        })
    }

    handleCommentSubmit = () => {
        const postId = this.props.match.params.postId
        const { body, author } = this.state.comment
        this.props.dispatch(addCommentToApi(postId,body,author))
    }

    handleUpVote = (postId) => {
        this.props.dispatch(postUpVoteToApi(postId))
    }

    handleDownVote = (postId) => {
        this.props.dispatch(postDownVoteToApi(postId))
    }

    handleDeletePost = (postId) => {
        this.props.dispatch(deletePostFromApi(postId))
            .then(() => this.handlePostDeleteSuccessModalOpen())
    }

    handlePostDeleteSuccessModalOpen = () => {
        this.setState({
            postDeleteSuccessModal:{
                ...this.state.postDeleteSuccessModal,
                open: true
            }
        })
    }

    handlePostDeleteSuccessModalClose = () => {
        this.setState({
            postDeleteSuccessModal:{
                ...this.state.postDeleteSuccessModal,
                open: false
            }
        })
    }

    render(){
        const postId = this.props.match.params.postId
        const { posts, comments } = this.props
        const post = posts.filter(post => (post.id === postId && !post.deleted))[0]
        let postComments = []
        if(post){
             postComments = comments.filter(comment => comment.parentId === post.id)
        }
        const { body, author } = this.state.comment
        const { postDeleteSuccessModal } = this.state

        return(
            <div>
                {!post ? (
                    <div>
                        <PageHeader/>
                        <Container>
                            <Message info>
                                404 Not found
                            </Message>
                        </Container>
                    </div>
                ) : (
                    <div>
                        <PageHeader/>
                        <Container>

                            <ModalSuccess open={postDeleteSuccessModal.open}
                                          title={postDeleteSuccessModal.title}
                                          body={postDeleteSuccessModal.body}
                                          onClose={this.handlePostDeleteSuccessModalClose}
                            />

                            <Button basic as={Link} to='/'>
                                <Icon name='left chevron'/>
                                Back to all posts
                            </Button>

                            <Divider/>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={9}>

                                        <PostItemDetail id={post.id}
                                                        category={post.category}
                                                        title={post.title}
                                                        author={post.author}
                                                        body={post.body}
                                                        voteScore={post.voteScore}
                                                        timestamp={post.timestamp}
                                                        onUpVote={() => this.handleUpVote(post.id)}
                                                        onDownVote={() => this.handleDownVote(post.id)}
                                                        onDeletePost={() => this.handleDeletePost(post.id)}
                                                        commentsCount={postComments.filter(comment => (comment.parentId === post.id) && (!comment.deleted)).length}
                                        />

                                        <Divider/>

                                        <CommentList comments={postComments}/>

                                        <Divider/>

                                        <CommentForm body={body}
                                                     author={author}
                                                     onInputChange={this.handleInputChange}
                                                     onCommentSubmit={this.handleCommentSubmit}/>


                                    </Grid.Column>
                                </Grid.Row>

                            </Grid>
                        </Container>
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts, comments}) => ({
    categories,
    posts,
    comments
})

export default connect(mapStateToProps)(PostDetail)



