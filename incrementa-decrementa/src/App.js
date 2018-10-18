import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks:0,           //clicks to store how many times we click on button
      show:true           //show to set value to true or false depending if we want see number or not
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1});    //IncrementItem() we change our state clicks by adding 1.
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1});    //DecreaseItem() we change our state clicks by removing 1.
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show});           //ToggleClick() we flip our state show for opposite every time we click.
  }

  render() {
    return (
      <div>
        <button onClick={this.IncrementItem}>Click per incrementare di 1</button>
        <button onClick={this.DecreaseItem}>Click per decrementare di 1</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Nascondi numero' : 'Mostra numero' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default App;
