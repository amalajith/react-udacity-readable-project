import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'semantic-ui-react'

export default class ModalSuccess extends Component {
    render(){
        return(
            <div>
                <Modal size='tiny' open={this.props.open} onClose={this.props.onClose}>
                    <Modal.Header>
                        {this.props.title}
                    </Modal.Header>
                    <Modal.Content>
                        <p>{this.props.body}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button positive icon='checkmark' labelPosition='right' content='Ok' onClick={this.props.onClose} />
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }
}

ModalSuccess.propTypes = {
    open: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
}