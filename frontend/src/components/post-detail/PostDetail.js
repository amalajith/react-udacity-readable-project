import React, { Component } from 'react'
import {Redirect, Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Grid , Button, Icon, Divider } from 'semantic-ui-react'
import PageHeader from '../common/page-header/PageHeader'
import PostItemDetail from "../common/post-item-detail/PostItemDetail"
import * as PostDetailAPI from './PostDetailAPI'
import {addComment, getComments, postDownVoteSuccess, postUpVoteSuccess} from "../../actions/index"
import CommentForm from "../common/comment-form/CommentForm"
import CommentList from "../common/comment-list/CommentList"

class PostDetail extends Component {

    state = {
        comment: {
            body: '',
            author: '',
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.postId
        PostDetailAPI.getComments(postId)
            .then(res=> {
                if(res.status === 200){
                    const comments = res.data
                    this.props.dispatch(getComments(comments))
                }
            })
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
        PostDetailAPI.addComment(postId, body, author)
            .then(res => {
                if(res.status === 200){
                    const comment  = res.data
                    this.props.dispatch(addComment(comment))
                    this.setState({
                        comment: {
                            body: '', author: ''
                        }
                    })
                }
            })
    }

    handleUpVote = () => {
        const postId = this.props.match.params.postId
        PostDetailAPI.upVotePost(postId)
            .then(res => {
                if(res.status === 200){
                    const post = res.data
                    this.props.dispatch(postUpVoteSuccess(post))
                }
            })
    }

    handleDownVote = () => {
        const postId = this.props.match.params.postId
        PostDetailAPI.downVotePost(postId)
            .then(res => {
                if(res.status === 200){
                    const post = res.data
                    this.props.dispatch(postDownVoteSuccess(post))
                }
            })
    }

    render(){
        const postId = this.props.match.params.postId
        const { posts, comments } = this.props
        const post = posts.filter(post => post.id === postId)[0]
        const { body, author } = this.state.comment

        return(
            <div>
                {!post ? (
                    <Redirect to='/'/>
                ) : (
                    <div>
                        <PageHeader/>
                        <Container>
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
                                                        onUpVote={this.handleUpVote}
                                                        onDownVote={this.handleDownVote}
                                                        timestamp={post.timestamp}
                                        />

                                        <Divider/>
                                        <CommentList comments={comments}/>
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



