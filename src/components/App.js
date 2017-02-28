import React, { Component } from 'react';

import NameLogo from './name_logo';
import PictureAbout from './picture_about';
import Links from './links';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NameLogo/>
        </div>
        <p className="App-intro">
          <PictureAbout/>
          <Links/>
        </p>
      </div>
    );
  }
}

export default App;
