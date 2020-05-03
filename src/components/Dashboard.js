import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProjectItems from './projects/ProjectItems';

class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (   
            <div>
               <h1 className = "alert alert-warning">Dashboard</h1> 
               <ProjectItems/> 
            </div>         
        );
    }
}
export default Dashboard;