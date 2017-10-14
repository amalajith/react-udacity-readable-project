import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'

export default class CreatePostLink extends Component {
    render(){
        return(
            <Button floated='right' as={Link} to='/create-post'>
                New post
                <Icon name='right chevron'/>
            </Button>
        )
    }
}