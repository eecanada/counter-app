import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: ['tag 1', 'tag 2', 'tag 3'],
  };


  // constructor(){
  //   super()
  //     this.handleIncrement = this.handleIncrement.bind(this)
  // }

  renderTags(){
    if(this.state.tags.length === 0)  return <p> There are no tags!</p>

    return <ul> {this.state.tags.map((tag) => { return <li key={tag}> {tag} </li> })}</ul>

  }

  

  handleIncrement = () => {
    this.state.count = this.state.count + 1
  }

  

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm"> Increment </button>
       {this.state.tags.length === 0 && "Please create a new tag"} 
       {this.renderTags()} 
      
      </div> 
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
  

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    return (classes += this.state.count === 0 ? 'warning' : 'primary');
  }
 
}

  

export default Counter;
