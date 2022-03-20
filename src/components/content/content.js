import React from "react";
import Home from '../sections/home/home';
import About from '../sections/about/about';
import Projects from '../sections/projects/projects';
import Resume from '../sections/resume/resume';
import Contact from '../sections/contact/contact';
import './content.css';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.myRefs = props.myRefs;
    }

    render() {
        return (
            <div className="Content">
                <Home ref={this.myRefs.home} />
                <div className="Scroll">
                    Scroll Down!<br /><br />
                    <i className='bx bx-down-arrow-circle bx-md'></i>
                </div>
                <About ref={this.myRefs.about} />
                <Projects ref={this.myRefs.projectse} />
                <Resume ref={this.myRefs.resume} />
                <Contact ref={this.myRefs.contact} />
            </div>
        )
    }
}

export default Content;