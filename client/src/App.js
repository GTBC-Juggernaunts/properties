import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import API from './utils/API';
import parseString from 'xml2js';


class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  // open and close side drawer
  drawerToggleClickHandler = () => {
    // user function form of setting state to guarantee we change the state
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  // handler to close sidedrawer
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  // test getting results
  getZillowData = (state, city) => {
    API.getRegionChildren(state, city).then(res => {
      console.log('res', JSON.stringify(res));
    }).catch(err => console.log(err));
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />        
        {backdrop}
        <main style={{ marginTop: '64px' }}>
          <p>This is where we'll render cards and shit</p>
          <button onClick={this.getZillowData('ga', 'atlanta')}>Click this for zillow data</button>
        </main>
      </div>
    );
  }
}

export default App;
