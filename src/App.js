import React from 'react';
import Hello from './components/hello/hello';
import Goodbye from './components/Goodbye/Goodbye';
import Complex from './components/Complex/Complex';
import Counter from './components/Counter/Counter';
import ColorChanger from './components/ColorChanger/ColorChanger';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello name='Liana'/>
        <Hello name='Liana'/>
        <Goodbye name='Lili' />
        <Goodbye name='Lili' />
        <Complex name='Lili'/>
        <Complex name='Liana' />
        <Counter startNumber={1} />
        <Counter />
        <ColorChanger />
      </header>
    </div>
  );
}

export default App;
