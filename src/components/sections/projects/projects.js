import React from "react";
import './projects.css';

class Projects extends React.Component {
    render() {
        return (
            <div className="Content-Section" id="projects">
                <div className="section-header">Projects</div>
                <div className="section-content">
                    <div className="project"></div>
                    <div className="project"></div>
                    <div className="project"></div>
                </div>
            </div>
        )
    }
}

export default Projects;