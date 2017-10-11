import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, Grid, Header, Divider, Dropdown} from 'semantic-ui-react'
import PageHeader from '../common/page-header/PageHeader'
import * as HomeAPI from './HomeAPI'
import {getCategories, getPosts} from "../../actions/index"
import PostCategoryList from "../common/post-category-list/PostCategoryList"
import PostList from "../common/post-list/PostList"

class Home extends Component {

    componentDidMount() {
        this.handleGetCategories()
        this.handleGetPosts()
    }

    handleGetCategories = () => {
        HomeAPI.getCategories()
            .then(res => {
                if (res.status === 200) {
                    const categories = res.data.categories
                    this.props.dispatch(getCategories(categories))
                }
            })
    }

    handleGetPosts = () => {
        HomeAPI.getPosts()
            .then(res => {
                if (res.status === 200) {
                    const posts = res.data
                    this.props.dispatch(getPosts(posts))
                }
            })
    }

    render() {
        const {categories, posts} = this.props

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
                                <PostList posts={posts}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = ({categories, posts}, props) => ({
    categories,
    posts
})

export default connect(mapStateToProps)(Home)