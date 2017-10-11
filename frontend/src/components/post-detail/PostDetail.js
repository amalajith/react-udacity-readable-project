import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Grid, Form, Button, TextArea, Divider, Input } from 'semantic-ui-react'
import PageHeader from '../common/page-header/PageHeader'
import PostItemDetail from "../common/post-item-detail/PostItemDetail"
import * as PostDetailAPI from './PostDetailAPI'
import {getComments} from "../../actions/index"

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
                [name] : value
            }
        })
    }

    handleCommentSubmit = () => {
        const postId = this.props.match.params.postId
        const { body, author } = this.state.comment
        PostDetailAPI.addComment(postId, body, author)
            .then(res => console.log(res))
    }

    render(){
        const postId = this.props.match.params.postId
        const post = this.props.posts.filter(post => post.id === postId)[0]

        return(
            <div>
                {!post ? (
                    <Redirect to='/'/>
                ) : (
                    <div>
                        <PageHeader/>
                        <Container>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={9}>
                                        <PostItemDetail id={post.id}
                                                        category={post.category}
                                                        title={post.title}
                                                        author={post.author}
                                                        body={post.body}
                                                        voteScore={post.voteScore}
                                        />
                                        <Divider/>



                                        <Form>
                                            <Form.Field>
                                                <p>Add comment</p>
                                                <TextArea placeholder='Comment body' name='body' onChange={this.handleInputChange}/>
                                            </Form.Field>
                                            <Form.Field>
                                                <Input placeholder='Author' name='author' onChange={this.handleInputChange} />
                                            </Form.Field>
                                            <Button floated='right' onClick={this.handleCommentSubmit}>Add comment</Button>
                                        </Form>
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



