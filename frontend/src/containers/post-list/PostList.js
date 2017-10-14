import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Item, Dropdown } from 'semantic-ui-react'
import PostItem from "../../components/post-item/PostItem"
import {
    deletePostFromApi,
    postDownVoteToApi,
    postUpVoteToApi,
    sortPostsByVote,
    sortPostsByTime
} from "../../actions/index"

class PostList extends Component {

    handleSortChange = (sort) => {
        switch (sort) {
            case 'time':
                this.props.dispatch(sortPostsByTime())
                break
            case 'vote':
                this.props.dispatch(sortPostsByVote())
                break
            default:
        }
    }

    handleUpVote = (postId) => {
        this.props.dispatch(postUpVoteToApi(postId))
    }

    handleDownVote = (postId) => {
        this.props.dispatch(postDownVoteToApi(postId))
    }

    handleDeletePost = (postId) => {
        this.props.dispatch(deletePostFromApi(postId))
    }

    render(){
        const { posts, comments } = this.props
        return(
            <div>
                {posts.length > 0 ? (
                    <div>
                        <Dropdown style={{float: 'right'}} text='Sort posts'>
                            <Dropdown.Menu>
                                <Dropdown.Item text='Sort by vote order' active={this.props.sortType === 'vote'} onClick={() => this.handleSortChange('vote')}/>
                                <Dropdown.Item text='Sort by time' active={this.props.sortType === 'time'} onClick={() => this.handleSortChange('time')}/>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Item.Group divided relaxed>
                            {posts.map( post => (
                                <PostItem key={post.id}
                                          id={post.id}
                                          category={post.category}
                                          title={post.title}
                                          author={post.author}
                                          body={post.body}
                                          voteScore={post.voteScore}
                                          timestamp={post.timestamp}
                                          onUpVote={() => this.handleUpVote(post.id)}
                                          onDownVote={() => this.handleDownVote(post.id)}
                                          onDeletePost={() => this.handleDeletePost(post.id)}
                                          commentsCount={comments.filter(comment => (comment.parentId === post.id) && (!comment.deleted)).length}
                                />
                            ))}
                        </Item.Group>
                    </div>
                ): (
                    <p>
                        No posts to show here.
                    </p>
                )}
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
}

const mapStateToProps = ({ comments, sortType }, props) => ({
    comments,
    sortType
})

export default connect(mapStateToProps)(PostList)

