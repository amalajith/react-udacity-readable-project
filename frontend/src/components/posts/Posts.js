import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Container, Grid, Header, Divider, Dropdown} from 'semantic-ui-react'
import PageHeader from '../common/page-header/PageHeader'
import {filterPostsCategory} from "../../actions/index"
import PostList from "../common/post-list/PostList"
import PostCategories from "../common/post-categories/PostCategories"

class Posts extends Component {

    state = {
        currentCategory: ''
    }

    componentDidMount() {
        const currentCategory = this.props.match.params.category
        this.setState({
            currentCategory
        },() => {
            const posts = this.props.posts
            this.props.dispatch(filterPostsCategory(posts,this.state.currentCategory))
        })
    }

    render() {
        const {categories, filteredPosts} = this.props

        return (
            <div>
                <PageHeader/>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header as='h3'>Categories</Header>
                                <PostCategories categories={categories}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Dropdown style={{float: 'right'}} text='Filter posts'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='Vote score'/>
                                        <Dropdown.Item text='Post date'/>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Header as='h2'>
                                    All posts
                                </Header>
                                <Divider/>
                                <PostList posts={filteredPosts}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({ categories, posts, filteredPosts}) => ({
    categories,
    posts,
    filteredPosts
})

export default connect(mapStateToProps)(Posts)