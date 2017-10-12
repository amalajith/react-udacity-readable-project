import React, { Component } from 'react'
import { Item, Button, Divider} from 'semantic-ui-react'

export default class PostItemDetail extends Component {
    render(){
        const { id, category, author, title, body, voteScore } = this.props

        return(
            <div>
                <h1>{title}</h1>
                <p>By {author}</p>
                <Divider/>
                <p>
                    {body}
                </p>
                <Item>
                    <Item.Content>
                        <Item.Extra>
                            <Button
                                content='Vote'
                                icon='heart'
                                label={{as: 'a', basic: true, content: voteScore}}
                                labelPosition='right'
                            />
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </div>
        )
    }
}

