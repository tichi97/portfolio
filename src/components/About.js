import React, {Component} from 'react';
import profile from '../assets/profile.jpg';
import './About.css';
import python from '../assets/python.svg';
import Fade from 'react-reveal/Fade';

class About extends Component{
  render(){
      return (
      <div className="mv6-ns ma2-ns mv5 pa4-ns ma4 flex justify-content-center" id='about'>
      <Fade bottom>
        <div className="about w-70-ns m-auto">
            <h1 className='tl pl4'>About Page</h1>
            <div className='flex-ns db flex-column-m flex-row-l ph2-ns '>
                <div className='w-50-l w-100 pa4'>
                    <p className='near-black f5-ns tj'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</p>
                    <p className='near-black f5-ns tj'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className='w-50-l w-100 pa4 flex flex-wrap justify-center'>
                    <img className="ma1" src={python}/>
                    <img className="ma1" src={python}/>
                    <img className="ma1" src={python}/>
                    <img className="ma1" src={python}/>
                    <img className="ma1" src={python}/>
                    <img className="ma1" src={python}/>
                    <img className="ma1" src={python}/>
                    <img className="ma1" src={python}/>


                </div>
            </div>
        </div>
    </Fade>
    </div>
    );
  }
}

export default About;

