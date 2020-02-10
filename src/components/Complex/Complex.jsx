import React from 'react';
import Hello from '../hello/hello'
import Goodbye from '../Goodbye/Goodbye';

const Complex = props => {
  return (
    <div>
      <h3>Complex Element</h3>
      <Hello name={props.name} />
      <Goodbye name={props.name} />
    </div>
  )
}

export default Complex;
