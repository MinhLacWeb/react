import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export default class ReactLifeCycle extends Component {

    constructor(props) {
        super(props);
        console.log('constructor');
        this.state = {
            number: 1,
            like: 1
        }
    }

    static getDerivedStateFromProps(newProps, currentState) {
        //Trả về state trước khi render
        console.log('getDerivedStateFromProps')
        return currentState;
    }

    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate');   
        return true;
    }

    render() {
        console.log('render');
        return (
            <div className='container'>
                <h3>React life cycle</h3>
                <h3>Number: {this.state.number}</h3>
                <button className='mt-2 btn btn-success' onClick={() => {
                    this.setState({
                        number:this.state.number + 1
                    })
                }}>+</button>
                <hr />
                <h3>Like: {this.state.like}</h3>
                <button className='mt-2 btn btn-danger' onClick={() => {
                    this.setState({
                        like: this.state.like + 1
                    })
                }}>+</button>
                {this.state.like > 3 ? '' : <ChildComponent number={this.state.number} /> }
            </div>
        )
    }
    componentDidUpdate() {
        console.log('didupdate')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }
}
