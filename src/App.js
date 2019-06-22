import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import "react-screen-orientation/src/index";
import DeviceOrientation, { Orientation } from 'react-screen-orientation';

import Table from './components/Table';
import SingleElement from './components/SingleElement';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import Brainster from './Brainster.png';


class App extends Component {


  constructor(){
    super();
    this.state = {
      sound: false,
      languege: false,
      en: true,
      about: false
    }
  }
  
  toggleSound = (e) => {
        e.preventDefault();
      this.setState(prevState => {
        return{
          sound: !prevState.sound
        }
      });
    }

    chooseLanguege = (e) => {
      e.preventDefault();
      this.setState(prevState => {
        return {
          languege: !prevState.languege
        }
      })
    }

    toggleLanguege = (e) => {
      e.preventDefault();
      this.setState(prevState => {
        return {
          en: !prevState.en,
          languege: !prevState.languege
        }
      })
    }

    toggleAbout = (e) => {
        e.preventDefault();
        this.setState({ about: true })
    }
    offAbout = (e) => {
      this.setState({ about: false })
    }

  render () {
     return (
      <DeviceOrientation lockOrientation={'landscape'}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation='landscape' alwaysRender={false}>
          <div>
            <p>Only visible in landscape</p>
          </div>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation='portrait' alwaysRender={false}>
          <div>
            <p>Please rotate your device</p>
          </div>
        </Orientation>
      </DeviceOrientation>
    )
  }
}

export default App;

{/*<div className="App">
        <div className={this.state.about ? "aboutDiv aboutOpen" : "aboutDiv aboutHide"}>
          <img src={Brainster} alt=""/>
          <h1 onClick={this.offAbout}>&times;</h1>
          <img src={img2} alt=""/>
          <img src={img1} alt=""/>
          <img src={img3} alt=""/>
          <div className="info">
            <h2>{this.state.en ? 'DEVELOPED BY THE STUDENTS OF THE ACADEMY' : 'ИЗРАБОТЕНО ОД СТУДЕНТИТЕ НА АКАДЕМИЈАТА'}</h2>
            <p>{this.state.en ? <span>Web:</span> : <span>Web:</span>}<a href="https://codepreneurs.co" target='_blank' rel="noopener noreferrer">codepreneurs.co</a></p>
            <p>{this.state.en ? <span>E-mail:</span> : <span>Е-маил:</span>}<a href="mailto:contact@brainster.co" target='_blank' rel="noopener noreferrer">contact@brainster.co</a></p>
          </div>
        </div>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" render={(props)=> <Table {...props} lang={this.state.en} />}/>
              <Route path="/:number" render={(props)=> <SingleElement {...props} lang={this.state.en} />} />
            </Switch>
            <div className="linksLeft">
            <div className="languege">
              <div className={`mk lanNotActive ${this.state.languege && 'opened'}`}>
                {
                  this.state.en ?
                  <a onClick={this.toggleLanguege} href="/" name="mk">MK</a>
                  :
                  <a onClick={this.toggleLanguege} href="/" name="en">EN</a>
                }
              </div>
              <div className="en lanActive">
                {
                  this.state.en ?
                  <a onClick={this.chooseLanguege} href="/" name="en">EN</a>
                  :
                  <a onClick={this.chooseLanguege} href="/" name="mk">MK</a>
                }
              </div>
            </div>
            <div className="Sound">
              <a href="/" onClick={this.toggleSound}><i className="fas fa-volume-up"></i></a>
            </div>
          </div>
          <div className="linksRight">
            <div className="instagram">
              <a href="https://www.instagram.com/brainsterco/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="facebook">
              <a href="https://www.facebook.com/brainster.co/" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            </div>
            <div className="about">
              <a onClick={this.toggleAbout} href="/"><i className="fas fa-ellipsis-h"></i></a></div>
          </div>
        </BrowserRouter>
          </div>*/}




