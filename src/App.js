import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

import GlobalStyle from './globalStyle';

class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <SolarSystem />
        <Missions />
      </>
    );
  }
}

export default App;
