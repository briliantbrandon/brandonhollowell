import React from "react";
import Home from '../sections/home/home';
import About from '../sections/about/about';
import Projects from "../sections/projects/projects";
import './content.css';

class Content extends React.Component {
    render() {
        return (
            <div className="Content">
                <Home />
                <div className="Scroll">
                    Scroll Down!<br /><br />
                    <i class='bx bx-down-arrow-circle bx-md'></i>
                </div>
                <About />
                <Projects />
            </div>
        )
    }
}

export default Content;