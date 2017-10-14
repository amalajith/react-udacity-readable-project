import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Grid, Header, Divider} from 'semantic-ui-react'
import PageHeader from '../../components/page-header/PageHeader'
import {getCategoriesFromApi, getPostsFromApi} from "../../actions/index"
import PostCategoryList from "../../components/post-category-list/PostCategoryList"
import PostList from "../post-list/PostList"
import CreatePostLink from "../../components/create-post-link/CreatePostLink"

class Home extends Component {

    componentDidMount() {
        this.handleGetCategories()
        this.handleGetPosts()
    }

    handleGetCategories = () => {
        this.props.dispatch(getCategoriesFromApi())
    }

    handleGetPosts = () => {
        this.props.dispatch(getPostsFromApi())
    }

    render() {

        const {categories, posts } = this.props

        const visiblePosts = posts.filter(post => !post.deleted)

        return (
            <div>
                <PageHeader/>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <PostCategoryList categories={categories}/>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as='h2'>All posts</Header>
                                <Divider/>
                                <PostList posts={visiblePosts}/>
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

const mapStateToProps = ({categories, posts, sortType }, props) => ({
    categories,
    posts,
    sortType
})

export default connect(mapStateToProps)(Home)