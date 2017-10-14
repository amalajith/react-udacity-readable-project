import React, { Component } from 'react'
import { Form, TextArea, Button, Input} from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class CommentForm extends Component {
    render(){
        const { body, author } = this.props
        return(
            <div>
                <Form>
                    <Form.Field>
                        <p>Add comment</p>
                        <TextArea placeholder='Comment body' name='body' value={body}  onChange={this.props.onInputChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder='Author' name='author' value={author} onChange={this.props.onInputChange} />
                    </Form.Field>
                    <Button floated='right' onClick={this.props.onCommentSubmit}>Add comment</Button>
                </Form>
            </div>
        )
    }
}

CommentForm.propTypes = {
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onCommentSubmit: PropTypes.func.isRequired
}

