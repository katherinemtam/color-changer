import React, { Component } from 'react';
import ColorDisplay from '../components/color-picker/ColorDisplay';

export default class RandomColor extends Component {
  state = {
    selectedColor: 'pink',
    sameColor: false
  };

  getColor = () => {
    //reset sameColor state
    this.setState({ sameColor: false });
    
    //get random color
    const colors = ['palegreen', 'powderblue', 'pink', 'palegoldenrod'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    if(this.state.selectedColor === color) {
      this.setState({ sameColor: true });
    } else {
      this.setState({ selectedColor: color });
    }
  }

  // componentDidUpdate(prevProps, prevState){
  //   if(prevState.selectedColor === this.state.selectedColor) {
  //     console.log('duplicate');
  //   }}

  componentDidMount = () => {
    setInterval(() => { 
      this.getColor();
    }, 1000);
  };

  render() {
    const { selectedColor, sameColor } = this.state;

    return (
      <>
        {sameColor 
          ? <img src="https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg"/>
          : <ColorDisplay backgroundColor = { selectedColor } />
        }
        
      </>
    );
  }
}
