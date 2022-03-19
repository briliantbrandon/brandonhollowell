import React from "react";
import pfp from '../../../images/pfp.png'
import './home.css';

class Home extends React.Component {
    render() {
        return (
            <div className="Content-Section Home">
                <div className="Home-photo">
                    <img src={pfp} alt="author smiling"/>
                </div>
                <div className="Home-name">
                    Brandon Hollowell
                </div>
                <div className="Home-socials">
                    <i class="bx bxl-twitter"></i>
                    <i class="bx bxl-instagram"></i>
                    <i class="bx bxl-twitch"></i>
                    <i class="bx bxl-linkedin"></i>
                </div>
            </div>
        )
    }
}

export default Home;