import React , {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import logo from './logo.svg'
import { Link } from 'react-scroll';


class NavBar extends Component{
    render(){
        return(
        <Navbar fixed="top" className="bg-white black nav">
            <Navbar.Brand className='' href="#">
              <img
                alt="logo"
                src={logo}
                width="30"
                height="30"
                className="dib align-top "
              />{' '}
              NK
            </Navbar.Brand>
            <div className="ml6-l dtc-l v-mid w-75-l tr-l db w-100">
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="link dim black f6 f5-ns dib mr3 mr4-ns hover-dark-gray pointer"
                    >Home</Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="link dim black f6 f5-ns dib mr3 mr4-ns hover-dark-gray pointer"
                    >About</Link>
                    <Link
                        activeClass="active"
                        to="experience"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="link dim black f6 f5-ns dib mr3 mr4-ns hover-dark-gray pointer"
                    >Experience</Link>
                    <Link
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="link dim black f6 f5-ns dib mr3 mr4-ns hover-dark-gray pointer"
                    >Projects</Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className="link dim black f6 f5-ns dib mr3 mr4-ns hover-dark-gray pointer"
                    >Contact</Link>
                    <button className='pa2 ba bg-white-90 near-black bg-animate hover-bg-near-black hover-white pointer'>Resume</button>


            </div>
        </Navbar>
    );
    }

}

export default NavBar;
