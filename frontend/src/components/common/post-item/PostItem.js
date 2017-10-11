import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import { Item, Label, Button, Icon} from 'semantic-ui-react'

export default class PostItem extends Component {
    render(){

        const { id, category, author, title, body, voteScore } = this.props

        return(
            <Item>
                <Item.Content>
                    <Label>{category}</Label>
                    <Item.Header as='a'>
                        {title}
                    </Item.Header>
                    <Item.Meta>By {author}</Item.Meta>
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
                        <Button as={Link} to={`/posts/${id}`} primary floated='right'>
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
    voteScore: PropTypes.number.isRequired
}