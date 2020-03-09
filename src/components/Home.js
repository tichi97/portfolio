import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

class Home extends Component{
  render(){
      return (
      <div className='vh-100 bg-blue' id='home'>
          <h1 className='f-6-ns black'>Web Developer</h1>
          <p className='tc f3 black'>My name is Tichi and I love to build websites.
           Check out more about me below, bla bla bla bla, stuff stuff stuff</p>
          <div className='flex justify-center mt4'>
           <Button variant="outline-dark mr5 br0" className='white bg-black hover-black hover-bg-near-white'>Download Resume</Button>
           <Button variant="outline-light br0" className='black bg-near-white hover-bg-light-gray '>Get In Touch</Button>
          </div>
        </div>
    );
  }
}

export default Home;

