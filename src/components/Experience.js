import React , {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Work1 , {Work2,Work3} from './Work1';
import classnames from "classnames";
import './Experience.css';
import Fade from 'react-reveal/Fade';

class Experience extends Component{
    constructor(){
        super()//in order to use 'this' you have to say super()
        this.state = {
            currentComponent:'Work1',
            active:'work1'
        };
        this.handleClick = this.handleClick.bind(this);
    }
    // componentDidMount(){
    //     this.setState({currentComponent:robots})
    // }

    getComponent(){
        let component;
        switch (this.state.currentComponent){
            case 'Work1' :
                component = <Work1/>;
                break;
            case 'Work2' :
                component = <Work2/>;
                break;
            case 'Work3' :
                component = <Work3/>;
                break;
            case 'compD' :
                component = <Work1/>;
                break;
        }
        return component;
    }

    handleClick(comp,name){
        this.setState({currentComponent:comp,
            active:name});

    }


    render(){
        return(
            <section className='mv6-ns pa4-ns ma2-ns ma4 mv5 flex justify-content-center' id="experience">
            <Fade bottom>
                <div className="about w-70-ns m-auto">
                    <h1 className='tl pl4'>Experience</h1>
                    <div className='flex-l '>
                        <ul className='flex justify-around pa0 w-20-l flex-wrap-l flex-column-l br-l '>
                            <li className='pa2 ph2 link pointer hover-moon-gray' ><a className={this.state.active === 'work1' ? 'active' : ''} onClick={() => this.handleClick('Work1','work1')}>Work 1</a></li>
                            <li className='pa2 ph2 link pointer hover-moon-gray'><a className={this.state.active === 'work2' ? 'active' : ''} onClick={() => this.handleClick('Work2','work2')}>Work 2</a></li>
                            <li className='pa2 ph2 link pointer hover-moon-gray'><a className={this.state.active === 'work3' ? 'active' : ''} onClick={() => this.handleClick('Work3','work3')}>Work 3</a></li>
                        </ul>
                        <div className='w-70-l'>
                            {this.getComponent()}
                        </div>
                    </div>
                </div>
            </Fade>
            </section>
    );
    }

}

export default Experience;
