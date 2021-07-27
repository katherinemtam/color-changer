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
    this.getColor();
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
