import React, {Component} from 'react';
// import './Socials.css';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

class Socials extends Component{
  render(){
      return (
        <div className='fixed bottom-0 left-1 left-2-ns'>
            <ul className='pa0'>
                <li className='mb3'><a href="https://github.com/tichi97" target="_blank"><img alt='github' src={github}/></a></li>
                <li className='mb3'><a href="https://www.linkedin.com/in/nyatichi-kenani/" target="_blank" className='w-auto h-auto'><img alt='linkedin' src={linkedin}/></a></li>
                <li className='tc'><div className='bl h4 ml2 b--moon-gray'></div></li>
            </ul>
        </div>
    );
  }
}

export default Socials;
