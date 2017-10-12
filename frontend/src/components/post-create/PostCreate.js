import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import { Container, Grid } from 'semantic-ui-react'
import PostForm from "../common/post-form/PostForm"
import PageHeader from '../common/page-header/PageHeader'
import * as PostCreateAPI from './PostCreateAPI'

class PostCreate extends Component {

    state = {
        post: {
            title: '',
            body: '',
            author: '',
            category: ''
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
            .then(res => console.log(res))
    }

    render() {
        const {categories} = this.props
        const { title, body, author, category} = this.state.post
        return (
            <div>
                {categories.length === 0 ? (
                    <Redirect to='/'/>
                ) : (
                    <div>
                        <PageHeader/>
                        <Container>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column width={9}>
                                        <h1>Add a new post</h1>
                                        <p>All fields are mandatory</p>
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

const mapStateToProps = ({categories}) => ({
    categories
})

export default connect(mapStateToProps)(PostCreate)