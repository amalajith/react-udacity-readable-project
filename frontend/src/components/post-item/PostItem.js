import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import * as moment from 'moment'
import { Item, Label, Button, Icon, Divider} from 'semantic-ui-react'

export default class PostItem extends Component {
    render(){

        const { id, category, author, title, body, voteScore, timestamp } = this.props

        return(
            <Item className='post-item'>
                <Item.Content>
                    <Item.Header as='a'>
                        {title}
                    </Item.Header>
                    <Item.Meta>Author: {author} </Item.Meta>
                    <Item.Meta>Posted on {moment(timestamp).format("DD-MM-YYYY h:mm:ss")}</Item.Meta>
                    <Item.Meta>Category: <Label>{category}</Label></Item.Meta>
                    <Divider/>
                    <Item.Description>
                        {body}
                    </Item.Description>
                    <Item.Extra>
                        <Button
                            content='Vote'
                            icon='heart'
                            label={{as: 'a', basic: true, content: voteScore}}
                            labelPosition='right'
                        />
                        <Button as={Link} to={`/edit-post/${id}`}>
                            Edit
                        </Button>

                        <Button
                                icon='trash'
                                onClick={this.props.onDeletePost}
                        />

                        <Button negative
                                circular
                                icon='dislike outline'
                                onClick={this.props.onDownVote}
                        />

                        <Button positive
                                circular
                                icon='like outline'
                                onClick={this.props.onUpVote}
                        />
                        <Button as={Link} to={`/${category}/${id}`} primary floated='right'>
                            See post
                            <Icon name='right chevron'/>
                        </Button>
                    </Item.Extra>
                </Item.Content>
            </Item>
        )
    }
}

PostItem.propTypes = {
    id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    timestamp: PropTypes.number.isRequired,
    onUpVote: PropTypes.func.isRequired,
    onDownVote: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired
}