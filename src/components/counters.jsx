import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 2 },
      { id: 4, value: 1 },
    ],
  };

  //this.props.delete is counterid
  handleDelete = (counterid) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterid
    );
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => {
          return (
            <Counter
              key={counter.id}
              onDelete={this.handleDelete}
              counter={counter}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
