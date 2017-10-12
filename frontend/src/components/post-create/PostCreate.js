import React, {Component} from 'react'
import { Redirect, Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Grid, Button, Icon, Divider } from 'semantic-ui-react'
import PostForm from "../common/post-form/PostForm"
import PageHeader from '../common/page-header/PageHeader'
import * as PostCreateAPI from './PostCreateAPI'
import {postCreateSuccess} from "../../actions/index"
import ModalSuccess from "../common/modal-success/ModalSuccess"

class PostCreate extends Component {

    state = {
        post: {
            title: '',
            body: '',
            author: '',
            category: ''
        },
        postCreateSuccessModal: {
            open: false,
            title: 'Post created',
            body: 'Post has been successfully created'
        }
    }

    handleInputChange = (e, data) => {
        const value  = data.value;
        const name = data.name;
        this.setState({
            post: {
                ...this.state.post,
                [name]: value
            }
        })
    }

    handleCategorySelect = (e,data) => {
        const value = data.value
        this.setState({
            post: {
                ...this.state.post,
                category: value
            }
        })
    }

    handlePostSubmit = () => {
        const { title, body, author, category} = this.state.post
        if(!title || !body || !author || !category){
            return
        }
        PostCreateAPI.createPost(title,body,author, category)
            .then(res => {
                if(res.status === 200){
                    const post = res.data
                    this.props.dispatch(postCreateSuccess(post))
                    this.handlePostCreateSuccessModalOpen()
                }
            })
    }

    handlePostCreateSuccessModalOpen = () => {
        this.setState({
            postCreateSuccessModal: {
                ...this.state.postCreateSuccessModal,
                open: true
            }
        })
    }

    handlePostCreateSuccessModalClose = () => {
        this.setState({
            postCreateSuccessModal: {
                ...this.state.postCreateSuccessModal,
                open: false
            }
        })
    }

    render() {
        const {categories} = this.props
        const { title, body, author, category} = this.state.post
        const { postCreateSuccessModal } = this.state
        return (
            <div>
                {categories.length === 0 ? (
                    <Redirect to='/'/>
                ) : (
                    <div>
                        <ModalSuccess open={postCreateSuccessModal.open}
                                      title={postCreateSuccessModal.title}
                                      body={postCreateSuccessModal.body}
                                      onClose={this.handlePostCreateSuccessModalClose}
                        />
                        <PageHeader/>
                        <Container>
                            <Button as={Link} to='/'>
                                <Icon name='left chevron'/>
                                Back to all posts
                            </Button>
                            <Divider/>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={9}>
                                        <h1>Add a new post</h1>
                                        <p>All fields are mandatory</p>
                                        <Divider/>
                                        <PostForm body={body}
                                                  title={title}
                                                  author={author}
                                                  onInputChange={this.handleInputChange}
                                                  onPostSubmit={this.handlePostSubmit}
                                                  categories={categories}
                                                  category={category}
                                                  onCategorySelect={this.handleCategorySelect}
                                        />
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

const mapStateToProps = ({categories, posts}) => ({
    categories,
    posts
})

export default connect(mapStateToProps)(PostCreate)