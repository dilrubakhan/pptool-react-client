import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
               <h1>Hello World</h1> 
            </div>
        )
    }
}
export default Dashboard;