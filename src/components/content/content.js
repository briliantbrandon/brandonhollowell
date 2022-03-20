import React from "react";
import Home from '../sections/home/home';
import About from '../sections/about/about';
import Projects from '../sections/projects/projects';
import Resume from '../sections/resume/resume';
import Contact from '../sections/contact/contact';
import './content.css';

class Content extends React.Component {

    scrollTo(e, selector) {
        e.preventDefault()
        const selection = document.querySelector(selector);
        selection.scrollIntoView({behavior: 'smooth', block: 'start'})
    }

    render() {
        return (
            <div className="Content">
                <Home />
                <div className="Scroll" onClick={(e) => {this.scrollTo(e, "#about")}}>
                    Scroll Down!<br /><br />
                    <i className='bx bx-down-arrow-circle bx-md'></i>
                </div>
                <About />
                <Projects />
                <Resume />
                <Contact />
            </div>
        )
    }
}

export default Content;