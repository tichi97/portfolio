import React, {Component} from 'react';
import './LandingPage.css'
import background from '../assets/abstract.jpg'

class LandingPage extends Component{
  render(){
      return (
        <div className='vh-100-ns vw-100-ns' id='home'>
            <div className='landing vh-100 vw-100 landing-sm flex justify-center items-center '>
                <h1 className='f-headline-ns black first first-sm'>SOFTWARE <br/>DEVELOPER</h1>
            </div>

        </div>
    );
  }
}

export default LandingPage;

