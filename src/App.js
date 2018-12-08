import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Products from './components/Products';
import Altos from './components/Altos';
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
import Contact from './components/Contact';
import Footer from "./components/Footer";
import Services from "./components/Services";

class App extends Component {
  state = {
    sideDrawerOpen: false
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <div className="App">
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/products" component={Products} />
          <Route path="/altos" component={Altos} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
        </main>

        <div className="Footer">
          <Footer />
          </div>
      </div>
    );
  }
};

export default App;
