import React , {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Experience.css';

class Work1 extends Component{
    render(){
        return(
            <div className='tl ph4 work'>
                <h3 className='near-black'>Company Name</h3>
                <small className='moon-gray'> Year and Month</small>
                <ul className="tl">
                    <li className='pa2'>I worked on this and this with this people</li>
                    <li className='pa2'>I improved this and this</li>
                    <li className='pa2'>I fixed this and this and manages to use this work around</li>
                </ul>
            </div>
        );
    }
}
class Work2 extends Component{
    render(){
        return(
            <div className='tl ph4 work'>
                <h3 className='near-black'>Company Name 2</h3>
                <small className='moon-gray'> Year and Month</small>
                <ul className="tl">
                    <li className='pa2'>I worked on this and this with this people</li>
                    <li className='pa2'>I improved this and this</li>
                    <li className='pa2'>I fixed this and this and manages to use this work around</li>
                </ul>
            </div>
        );
    }
}
class Work3 extends Component{
    render(){
        return(
            <div className='tl ph4 work'>
                <h3 className='near-black'>Company Name 3</h3>
                <small className='moon-gray'> Year and Month</small>
                <ul className="tl">
                    <li className='pa2'>I worked on this and this with this people</li>
                    <li className='pa2'>I improved this and this</li>
                    <li className='pa2'>I fixed this and this and manages to use this work around</li>
                </ul>
            </div>
        );
    }
}

export default Work1;
export {Work2, Work3};

