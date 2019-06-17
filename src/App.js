import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Table from './components/Table';
import About from './components/About';
import SingleElement from './components/SingleElement';



class App extends Component {


  constructor(){
    super();
    this.state = {
      sound: false,
      languege: false,
      en: true
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

  render() {
    return (
      <div className="App">
      	<BrowserRouter>
        		<Switch>
        			<Route exact path="/" render={(props)=> <Table {...props} lang={this.state.en} />}/>
        			<Route path="/about" component={About} />
              <Route path="/:name" render={(props)=> <SingleElement {...props} lang={this.state.en} />} />
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
              <Link to="/about"><i className="fas fa-ellipsis-h"></i></Link></div>
          </div>
      	</BrowserRouter>
      </div>
    );
  }
}

export default App;
