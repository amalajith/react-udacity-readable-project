import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as moment from 'moment'
import { Item, Button, Label, Divider} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class PostItemDetail extends Component {
    render(){
        const { id, category, author, title, body, voteScore, timestamp, commentsCount } = this.props

        return(
            <div>
                <Item>
                    <Item.Content>
                        <Item.Header as='h1'>
                            {title}
                        </Item.Header>
                        <Item.Meta>Author: {author} </Item.Meta>
                        <Item.Meta>Posted on {moment(timestamp).format("DD-MM-YYYY h:mm:ss")}</Item.Meta>
                        <Item.Meta>Category: <Label>{category}</Label></Item.Meta>
                        <Divider />
                        <Item.Description>
                            {body}
                        </Item.Description>
                        <Divider />

                        <Item.Extra>
                            <Button
                                floated='left'
                                content='Vote'
                                icon='heart'
                                label={{as: 'a', basic: true, content: voteScore}}
                                labelPosition='right'
                            />
                            <Button
                                floated='right'
                                content='Comments'
                                icon='comments'
                                label={{as: 'a', basic: true, content: commentsCount}}
                                labelPosition='right'
                            />
                        </Item.Extra>

                        <Item.Extra>
                            <Button as={Link} to={`/edit-post/${id}`}>
                                Edit
                            </Button>

                            <Button floated=''
                                    icon='trash'
                                    onClick={this.props.onDeletePost}
                            />

                            <Button negative
                                    floated='right'
                                    circular
                                    icon='dislike outline'
                                    onClick={this.props.onDownVote}
                            />

                            <Button positive
                                    floated='right'
                                    circular
                                    icon='like outline'
                                    onClick={this.props.onUpVote}
                            />


                        </Item.Extra>
                    </Item.Content>
                </Item>
            </div>
        )
    }
}

PostItemDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    voteScore: PropTypes.number.isRequired,
    onUpVote: PropTypes.func.isRequired,
    onDownVote: PropTypes.func.isRequired,
    onDeletePost: PropTypes.func.isRequired,
    commentsCount: PropTypes.number.isRequired
}

