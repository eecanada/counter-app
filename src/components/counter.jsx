import React, { Component } from 'react';

class Counter extends Component {
  

  // constructor(){
  //   super()
  //     this.handleIncrement = this.handleIncrement.bind(this)
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => {
          return <li key={tag}> {tag} </li>;
        })}
      </ul>
    );
  }


  render() {
    console.log(this.props.counter)
    return (
      <div>
        
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>

        {/* <button onClick={ () => this.handleIncrement(product)} className="btn btn-secondary btn-sm"> Increment </button> */}

        <button
          onClick={()=> this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && 'Please create a new tag'} */}
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    return (classes += this.props.counter.value === 0 ? 'warning' : 'primary');
  }
}

export default Counter;
