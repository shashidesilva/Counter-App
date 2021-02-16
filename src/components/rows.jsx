import React, { Component } from 'react';
import RowCounter from './rowcounter';

class Rows extends Component {
    render() { 
        const { onReset, counters, onDelete, onIncrement, onDecrement, addRow } = this.props;

        return ( 
            <div>
                <h2>Counter App</h2>

                <button onClick={addRow}>
                    Add Your Counter
                </button>

                <button onClick={onReset}>
                    Reset
                </button>

                {/* { counters.map(counter => (
                <RowCounter 
                    key={counter.id}
                    onDelete={onDelete}
                    onIncrement={onIncrement}
                    onDecrement={onDecrement}
                    counter={counter}/>
                ))}; */}
            </div>
         );
    }
}
 
export default Rows;