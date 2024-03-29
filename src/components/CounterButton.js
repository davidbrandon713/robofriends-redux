import React, { Component } from 'react';

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    // Does not work with PureComponent!
    //
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    updateCount = () => {
        this.setState(state => {
            return { count: state.count + 1 }
        })
    
    }

    render() {
        console.log('CounterButton')
        return(
            <button color={this.props.color} onClick={this.updateCount}>Count: {this.state.count}</button>
        );
    }
}

export default CounterButton;