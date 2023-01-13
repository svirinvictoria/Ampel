import React, { useState } from 'react';
import './App.css';
import AmpelPanel from './components/AmpelPanel';
import ButtonsPanel from './components/ButtonsPanel';
import Header from './components/Header';
import ContextLight from "../src/store/context-light";
import Condition from './components/Condition';


function App() {
const [myLight, setMyLight] = useState('');


  return (
    <ContextLight.Provider value={{
      light: myLight,
      changeLight: setMyLight
    }}>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>

        <div className="place-elements">
          <ButtonsPanel />
          <AmpelPanel />
        {/* <Condition type="Vertical" /> */}
        </div>
      </div>
    </ContextLight.Provider>
  );
}

export default App;
