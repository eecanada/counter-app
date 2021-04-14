import React, { Component } from 'react';

class Counter extends Component {
  state = {
    value: this.props.value,
    tags: ['tag 1', 'tag 2', 'tag 3'],
  };

  // constructor(){
  //   super()
  //     this.handleIncrement = this.handleIncrement.bind(this)
  // }

  renderTags() {
    if (this.state.tags.length === 0) return <p> There are no tags!</p>;
    return (
      <ul>
        {' '}
        {this.state.tags.map((tag) => {
          return <li key={tag}> {tag} </li>;
        })}
      </ul>
    );
  }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log('props', this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}> {this.formatCount()}</span>

        {/* <button onClick={ () => this.handleIncrement(product)} className="btn btn-secondary btn-sm"> Increment </button> */}

        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {this.state.tags.length === 0 && 'Please create a new tag'}
      </div>
    );
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
  }

  getBadgeClasses() {
    let classes = 'badge m-2 badge-';
    return (classes += this.state.value === 0 ? 'warning' : 'primary');
  }
}

export default Counter;
