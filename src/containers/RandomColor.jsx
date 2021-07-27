import React, { Component } from 'react';
import ColorDisplay from '../components/color-picker/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    selectedColor: 'pink',
  };

  getColor = () => {
    const colors = ['palegreen', 'powderblue', 'pink'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    this.setState({ selectedColor: color });
  }

  componentDidMount = () => {
    setInterval(() => { 
      this.getColor();
    }, 1000);
  };

  render() {
    const { selectedColor } = this.state;

    return (
      <>
        <ColorDisplay backgroundColor={selectedColor} />
      </>
    );
  }
}
