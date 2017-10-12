import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, TextArea, Input, Button, Dropdown, Label } from 'semantic-ui-react'

class PostForm extends Component {
    render(){
        const { categories, title, body, author, category } = this.props

        return(
            <div>
                <Form>
                    <Form.Field>
                        <Input placeholder='Title' name='title' value={title} onChange={this.props.onInputChange} />
                    </Form.Field>
                    <Form.Field>
                        <TextArea placeholder='Post body' name='body' value={body}  onChange={this.props.onInputChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Input placeholder='Author' name='author' value={author} onChange={this.props.onInputChange} />
                    </Form.Field>
                    <Form.Field>
                        <Dropdown text={category ? category : 'Post category'}>
                            <Dropdown.Menu>
                                {categories.map((category, index) => (
                                    <Dropdown.Item key={index} text={category.name} value={category.name} onClick={this.props.onCategorySelect} />
                                ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Field>
                    <Form.Field>
                        <Button floated='right' onClick={this.props.onPostSubmit}>Add post</Button>
                    </Form.Field>
                </Form>
            </div>
        )
    }
}


export default PostForm

PostForm.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onPostSubmit: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    category: PropTypes.string.isRequired,
    onCategorySelect: PropTypes.func.isRequired
}