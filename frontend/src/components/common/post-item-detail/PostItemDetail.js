import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as moment from 'moment'
import { Item, Button, Label, Divider} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class PostItemDetail extends Component {
    render(){
        const { id, category, author, title, body, voteScore, timestamp } = this.props

        return(
            <div>
                <Item>
                    <Item.Content>
                        <Item.Header as='h1'>
                            {title}
                        </Item.Header>
                        <Item.Meta>By {author} on {moment(timestamp).format("DD-MM-YYYY h:mm:ss")} in <Label>{category}</Label></Item.Meta>
                        <Divider />
                        <Item.Description>
                            {body}
                        </Item.Description>
                        <Divider />
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

                            <Button floated='right'
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
    onDeletePost: PropTypes.func.isRequired
}

