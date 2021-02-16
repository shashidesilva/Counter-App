import React, { Component } from 'react';
import './App.css';
import Rows from './components/rows';
import RowCounter from './components/rowcounter';
import { useState } from 'react'

class App extends Component {
  state = { 
      counters: [
          { id: 1, value: 0 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 }
      ]
   };

   handleIncrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value++;
      this.setState({ counters });
   };

   handleDecrement = counter => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = {...counter};
      counters[index].value--;
      this.setState({ counters });
   };

   handleReset = () => {
       const counters = this.state.counters.map(c => {
           c.value = 0;
           return c;
       });
       this.setState({ counters });
   };

   handleDelete = (counterId) => {
       const counters = this.state.counters.filter(c => c.id !== counterId);
       this.setState({ counters: counters });
   };

   constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }

  render() { 
      return ( 
          <React.Fragment>
              <main className="container">
                  {/* <Rows
                  counters={this.state.counters}
                  onReset={this.handleReset}
                  onDelete={this.handleDelete} 
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  addRow={this.triggerAddTripState}
                  /> */}

              {this.state.isEmptyState && 
              <Rows
              counters={this.state.counters}
              onReset={this.handleReset}
              onDelete={this.handleDelete} 
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
              addRow={this.triggerAddTripState}
              />} 
              </main>
          </React.Fragment>
       );
  }
}

export default App;
