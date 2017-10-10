import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Item } from 'semantic-ui-react'
import PostItem from "../post-item/PostItem"

export default class PostList extends Component {
    render(){
        const { posts } = this.props
        return(
            <div>
                <Item.Group>
                    {posts.map( post => (
                        <PostItem key={post.id}
                                  category={post.category}
                                  title={post.title}
                                  author={post.author}
                                  body={post.body}
                                  voteScore={post.voteScore}/>
                    ))}
                </Item.Group>
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired
}