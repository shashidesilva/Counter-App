import React, { Component } from 'react';

class RowCounter extends Component {
    state = {  }
    render() { 
        let { title, task } = this.props

        return ( 
            <div>
                <button onClick={() => this.props.onIncrement(this.props.counter)}>Add Count</button>
                <span>{this.formatCount()}</span>
                <button onClick={() => this.props.onDecrement(this.props.counter)}>Remove Counter</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
         );
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default RowCounter;