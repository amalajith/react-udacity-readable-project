import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Item, Dropdown } from 'semantic-ui-react'
import PostItem from "../post-item/PostItem"

class PostList extends Component {

    render(){
        const { posts } = this.props
        return(
            <div>
                <Dropdown style={{float: 'right'}} text='Sort posts'>
                    <Dropdown.Menu>
                        <Dropdown.Item text='Sort by vote order' active={this.props.sortType === 'vote'} onClick={() => this.props.handleSortChange('vote')}/>
                        <Dropdown.Item text='Sort by time' active={this.props.sortType === 'time'} onClick={() => this.props.handleSortChange('time')}/>
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
                        />
                    ))}
                </Item.Group>
            </div>
        )
    }
}

PostList.propTypes = {
    posts: PropTypes.array.isRequired,
    handleSortChange: PropTypes.func.isRequired
}

const mapStateToProps = ({ sortType }) => ({
    sortType
})

export default connect(mapStateToProps)(PostList)

