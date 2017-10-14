import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {Container, Grid, Header, Divider, Button, Icon} from 'semantic-ui-react'
import PageHeader from '../../components/page-header/PageHeader'
import PostList from "../post-list/PostList"
import PostCategoryList from "../../components/post-category-list/PostCategoryList"
import {sortPostsByTime, sortPostsByVote} from "../../actions/index"
import CreatePostLink from "../../components/create-post-link/CreatePostLink"

class Posts extends Component {

    handleSort = (sort) => {
        switch(sort){
            case 'time':
                this.props.dispatch(sortPostsByTime())
                break
            case 'vote':
                this.props.dispatch(sortPostsByVote())
                break
            default:

        }
    }

    render() {

        const {categories, posts} = this.props
        const category = this.props.match.params.category
        const categoryPosts = posts.filter(post => post.category === category)

        return (
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
                            <Grid.Column width={4}>
                                <PostCategoryList categories={categories}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as='h2'>
                                    {category} posts
                                </Header>
                                <Divider/>
                                <PostList posts={categoryPosts} handleSortChange={this.handleSort}/>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <CreatePostLink/>
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