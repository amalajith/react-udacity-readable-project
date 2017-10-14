import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, TextArea, Form } from 'semantic-ui-react'

export default class CommentEditFormModal extends Component {
    render(){
        return(
            <div>
                <Modal size='tiny' open={this.props.open} onClose={this.props.onClose}>
                    <Modal.Header>
                        Edit comment
                    </Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Field>
                                <TextArea value={this.props.body} name='body' onChange={this.props.onValueChange}/>
                            </Form.Field>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.props.onClose}>Cancel</Button>
                        <Button positive icon='checkmark' labelPosition='right' content='Ok' onClick={this.props.onSubmit} />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

CommentEditFormModal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onValueChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    body: PropTypes.any.isRequired
}