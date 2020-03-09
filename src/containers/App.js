import React, {Component} from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import About from '../components/About';
import Project from '../components/Project';
import LandingPage from '../components/LandingPage';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



class App extends Component{
  render(){
      return (
      <div className="App myapp">
        <NavBar/>
        <LandingPage/>
        {/*<Home/>*/}
        <About/>
        <Experience/>
        <Project/>
        <Contact/>
        <Footer/>


      </div>
    );
  }
}

export default App;

