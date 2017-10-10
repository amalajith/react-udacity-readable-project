import React, { Component } from 'react'
import { List } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {filterPostsCategory} from "../../../actions/index"

class PostCategories extends Component {

    showSelectedCategory = (category) => {
        this.props.dispatch(filterPostsCategory(this.props.posts,category.name))
        this.props.history.push(`/${category.path}/posts`)

    }

    render(){
        const { categories } = this.props
        return(
            <List divided relaxed>
                {categories.map((category, index) => (
                    <List.Item key={index}>
                        <List.Header onClick={() => this.showSelectedCategory(category)}>{category.name}</List.Header>
                    </List.Item>
                ))}
            </List>
        )
    }
}

PostCategories.propTypes = {
    categories: PropTypes.array.isRequired
}

const mapStateToProps = ({posts}) => ({
    posts,
})

export default connect(mapStateToProps)(PostCategories)