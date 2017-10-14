import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Container, Grid, Button, Icon, Divider} from 'semantic-ui-react'
import PostForm from "../../components/post-form/PostForm"
import PageHeader from '../../components/page-header/PageHeader'
import * as PostEditAPI from './PostEditAPI'
import {postEditSuccess} from "../../actions/index"
import ModalSuccess from "../../components/modal-success/ModalSuccess"

class PostEdit extends Component {

    state = {
        post: {
            id: '',
            title: '',
            body: '',
        },
        postEditSuccessModal: {
            open: false,
            title: 'Post edited',
            body: 'Post has been successfully edited'
        }
    }

    componentDidMount() {
        const postId = this.props.match.params.postId
        const post = this.props.posts.filter(post => post.id === postId)[0]
        if (post) {
            this.setState({
                post: {
                    ...this.state.post,
                    id: post.id,
                    title: post.title,
                    body: post.body,
                }
            })
        }
    }

    handleInputChange = (e, data) => {
        const value = data.value;
        const name = data.name;
        this.setState({
            post: {
                ...this.state.post,
                [name]: value
            }
        })
    }

    handlePostSubmit = () => {
        const {id, title, body} = this.state.post
        if (!title || !body ) {
            return
        }
        PostEditAPI.editPost(id, title, body)
            .then(res => {
                if (res.status === 200) {
                    const post = res.data
                    this.props.dispatch(postEditSuccess(post))
                    this.handlePostEditSuccessModalOpen()
                }
            })
    }

    handlePostEditSuccessModalOpen = () => {
        this.setState({
            postEditSuccessModal: {
                ...this.state.postEditSuccessModal,
                open: true
            }
        })
    }

    handlePostEditSuccessModalClose = () => {
        this.setState({
            postEditSuccessModal: {
                ...this.state.postEditSuccessModal,
                open: false
            }
        })
    }

    render() {
        const {categories} = this.props
        const {title, body} = this.state.post
        const {postEditSuccessModal} = this.state
        return (
            <div>
                {categories.length === 0 ? (
                    <div>
                        Please wait ...
                    </div>
                ) : (
                    <div>
                        <PageHeader/>
                        <ModalSuccess open={postEditSuccessModal.open}
                                      title={postEditSuccessModal.title}
                                      body={postEditSuccessModal.body}
                                      onClose={this.handlePostEditSuccessModalClose}
                        />
                        <Container>

                            <Button basic as={Link} to='/'>
                                <Icon name='left chevron'/>
                                Back to all posts
                            </Button>
                            <Divider/>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={9}>
                                        <h1>Edit post</h1>
                                        <p>All fields are mandatory</p>
                                        <Divider/>
                                        <PostForm body={body}
                                                  title={title}
                                                  onInputChange={this.handleInputChange}
                                                  onPostSubmit={this.handlePostSubmit}
                                                  categories={categories}
                                                  isEdit={true}
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

export default connect(mapStateToProps)(PostEdit)