import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, List, Grid, Header } from 'semantic-ui-react'
import PageHeader from '../common/page-header/PageHeader'
import * as HomeAPI from './HomeAPI'
import {getCategories} from "../../actions/index"

class Home extends Component {

    componentDidMount() {
        HomeAPI.getCategories()
            .then(res => {
              if(res.status === 200){
                  const categories = res.data.categories
                  console.log(categories)
                  this.props.dispatch(getCategories(categories))
              }
            })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <PageHeader/>
                <Container>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Header as='h3'>Categories</Header>
                                <List divided relaxed>
                                    <List.Item>
                                        <List.Header>Lorem</List.Header>
                                    </List.Item>
                                    <List.Item>
                                        <List.Header>Lorem</List.Header>
                                    </List.Item>
                                    <List.Item>
                                        <List.Header>Lorem</List.Header>
                                    </List.Item>
                                </List>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Header as='h2'>Posts</Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (categories, props) => ({
    categories
})

export default connect(mapStateToProps)(Home)