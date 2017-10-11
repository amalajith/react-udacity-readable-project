import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Container, Grid, Header, Divider} from 'semantic-ui-react'
import PageHeader from '../common/page-header/PageHeader'
import PostList from "../common/post-list/PostList"
import PostCategoryList from "../common/post-category-list/PostCategoryList"

class Posts extends Component {

    render() {

        const {categories, posts} = this.props
        const category = this.props.match.params.category
        const categoryPosts = posts.filter(post => post.category === category)

        return (
            <div>
                <PageHeader/>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header as='h3'>Categories</Header>
                                <PostCategoryList categories={categories}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as='h2'>
                                    All posts
                                </Header>
                                <Divider/>
                                <PostList posts={categoryPosts}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts}) => ({
    categories,
    posts,
})

export default connect(mapStateToProps)(Posts)