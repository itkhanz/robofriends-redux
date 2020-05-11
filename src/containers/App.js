import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending
        // error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         robots: [],
    //         // searchfield: ''
    //     }
    // }

    componentDidMount () {
        // console.log(this.props.store)
        // console.log(this.props.store.getState())

        this.props.onRequestRobots();
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({robots: users}));
    }

    // onSearchChange = (event) => {
    //     this.setState({ searchfield: event.target.value });
    // }

    render() {
        // const { robots ,searchfield } = this.state;
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(searchField.toLowerCase())
        });
        
        return isPending ? 
            <h1 className = 'tc'>Loading</h1> 
            : 
            (
                <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
                </div>
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(App);