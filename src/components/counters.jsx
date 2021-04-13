import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
  state = {
    counters: [
      {id: 1, value: 0},
      {id: 2, value: 4},
      {id: 3, value: 2},
      {id: 4, value: 1},
    ]
    }

    handleDelete = () => {
      console.log('Event Handle Called')
    }

  render() { 
    return ( 
      <div>
          {this.state.counters.map((counter) => {
            return <Counter key={counter.id} onDelete={this.handleDelete} value={counter.value} selected={true} id={counter.id}/> 
          })}
      </div>
     );
  }
}
 
export default Counters;
