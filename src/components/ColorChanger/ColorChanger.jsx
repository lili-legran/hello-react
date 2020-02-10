import React from 'react';
import './colorChanger.scss';

class ColorChanger extends React.Component {
  state = {
    currentClass: 'baseColor'
  }
  
  changeColor = () => {
    let newClass;
    if (this.state.currentClass === 'baseColor') {
      newClass = 'blueColor';
    } else {
      newClass = 'baseColor';
    };
    this.setState({
      currentClass: newClass
    })
  }
  
  render() {
    return (
      <div>
        <h3> ColorChanger </h3>
        <button
          className={this.state.currentClass}
          onClick={this.changeColor} >
            Click me!
        </button>
      </div>
    )
  }
}
export default ColorChanger;