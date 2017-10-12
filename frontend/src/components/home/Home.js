import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {Container, Grid, Header, Divider,Button,Icon} from 'semantic-ui-react'
import PageHeader from '../common/page-header/PageHeader'
import * as HomeAPI from './HomeAPI'
import {getCategories, getPosts, sortPostsByTime, sortPostsByVote} from "../../actions/index"
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

        const visiblePosts = posts.filter(post => !post.deleted)

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
                                    <Button floated='right' as={Link} to='/create-post'>
                                        New post
                                        <Icon name='right chevron'/>
                                    </Button>
                                </Header>
                                <Divider/>
                                <PostList posts={visiblePosts} handleSortChange={this.handleSort}/>
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