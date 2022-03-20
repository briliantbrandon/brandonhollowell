import React from "react";
import './about.css';
import levi from '../../../images/levi.png';

class About extends React.Component {
    render() {
        return (
            <div className="Content-Section About" id="about">
                <div className="section-header">About Me</div>
                <div className="section-content">
                    <div className="intro">
                        <div className="intro-text">
                            Howdy! My name is Brandon Hollowell and I'm a software engineer working out of Frisco, TX. 
                            I have experience building bots, automation, and monitoring solutions for 
                            large enterprise voice-over-ip environments as well as community applications.
                        </div>
                        <div className="charts">
                            <div className="chart">
                                <div className="label">
                                    Software Engineer
                                    <div className="label-percentage">95%</div>
                                </div>
                                <div className="bar">
                                    <div className="percentage" id="se-percentage"></div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="label">
                                    DevOps
                                    <div className="label-percentage">80%</div>
                                </div>
                                <div className="bar">
                                    <div className="percentage" id="devops-percentage"></div>
                                </div>
                            </div>
                            <div className="chart">
                                <div className="label">
                                    Site Reliability Engineering
                                    <div className="label-percentage">75%</div>
                                </div>
                                <div className="bar">
                                    <div className="percentage" id="sre-percentage"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dog">
                        <img src={levi} alt="puppy in chair" />
                        ^This^ is Levi!
                    </div>
                </div>
            </div>
        )
    }
}

export default About;