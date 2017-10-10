import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class PostCategories extends Component {
    render(){
        const { categories } = this.props
        return(
            <List divided relaxed>
                {categories.map((category, index) => (
                    <List.Item key={index}>
                        <List.Header as={Link}
                                     to={`/${category.path}/posts`}>{category.name}</List.Header>
                    </List.Item>
                ))}
            </List>
        )
    }
}

PostCategories.propTypes = {
    categories: PropTypes.array.isRequired
}