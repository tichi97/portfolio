import React, {Component} from 'react';
import './Project.css';
import github from '../assets/github.svg';
import lnk from '../assets/link.svg';
import Fade from 'react-reveal/Fade';

class Project extends Component{
  render(){
      return (
      <div className="mv6-ns ma2-ns ma4 mv5 pa4-l" id='project'>
      <Fade>
        <h1>Project Page</h1>
      </Fade>
        <Fade bottom>
        <div className='flex flex-wrap justify-center pa3-ns'>

            <div className='tj h-75-l w-25-l w-70-m ma4 pa4 project'>
                <div className='flex justify-between'>
                    <img alt='github' src={github} className='mb4'/>
                    <img alt='link' src={lnk} className='mb4'/>
                </div>
                <h3 className='moon-gray'>Project Name</h3>
                <p className='dark-gray mb4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap">
                <small className='moon-gray mr2'> Language</small>
                <small className='moon-gray mr2'>Language</small>
                <small className='moon-gray'>Language</small>
                </div>
            </div>

            <div className='tj h-75-l w-25-l w-70-m ma4 pa4 project'>
                <div className='flex justify-between'>
                    <img alt='github' src={github} className='mb4'/>
                    <img alt='link' src={lnk} className='mb4'/>
                </div>
                <h3 className='moon-gray'>Project Name</h3>
                <p className='dark-gray mb4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap">
                <small className='moon-gray mr2'> Language</small>
                <small className='moon-gray mr2'>Language</small>
                <small className='moon-gray'>Language</small>
                </div>
            </div>

            <div className='tj h-75-l w-25-l w-70-m ma4 pa4 project'>
                <div className='flex justify-between'>
                    <img alt='github' src={github} className='mb4'/>
                    <img alt='link' src={lnk} className='mb4'/>
                </div>
                <h3 className='moon-gray'>Project Name</h3>
                <p className='dark-gray mb4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap">
                <small className='moon-gray mr2'> Language</small>
                <small className='moon-gray mr2'>Language</small>
                <small className='moon-gray'>Language</small>
                </div>
            </div>

            <div className='tj h-75-l w-25-l w-70-m ma4 pa4 project'>
                <div className='flex justify-between'>
                    <img alt='github' src={github} className='mb4'/>
                    <img alt='link' src={lnk} className='mb4'/>
                </div>
                <h3 className='moon-gray'>Project Name</h3>
                <p className='dark-gray mb4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap">
                <small className='moon-gray mr2'> Language</small>
                <small className='moon-gray mr2'>Language</small>
                <small className='moon-gray'>Language</small>
                </div>
            </div>

            <div className='tj h-75-l w-25-l w-70-m ma4 pa4 project'>
                <div className='flex justify-between'>
                    <img alt='github' src={github} className='mb4'/>
                    <img alt='link' src={lnk} className='mb4'/>
                </div>
                <h3 className='moon-gray'>Project Name</h3>
                <p className='dark-gray mb4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                {/*<button className='w-50-ns mb4 mt4 ba pa2 b--moon-gray-10 bg-white dark-gray bg-animate hover-bg-near-white'> View</button>*/}
                <div className="flex flex-wrap">
                <small className='moon-gray mr2'> Language</small>
                <small className='moon-gray mr2'>Language</small>
                <small className='moon-gray'>Language</small>
                </div>
            </div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default Project;

