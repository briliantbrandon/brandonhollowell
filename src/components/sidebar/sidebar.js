import React from "react"
import logo from '../../images/website-logo-alt.png';
import './sidebar.css';

class Sidebar extends React.Component {

    scrollTo(e, selector) {
        e.preventDefault();
        const selection = document.querySelector(selector);
        selection.scrollIntoView({behavior: 'smooth', block: 'start'});
    }

    render() {
        return (
            <div className="Sidebar">
                <div className="Sidebar-logo">
                    <img src={logo} alt="Banner Logo" />
                </div>
                <div className="Sidebar-Navigation">
                    <ul>
                        <li onClick={(e) => {this.scrollTo(e, "#home")}}>
                            <i className='bx bx-home'></i>home
                        </li>
                        <li onClick={(e) => {this.scrollTo(e, "#about")}}>
                            <i className='bx bxs-user'></i>about
                        </li>
                        <li onClick={(e) => {this.scrollTo(e, "#projects")}}>
                            <i className='bx bx-desktop'></i>projects
                        </li>
                        <li onClick={(e) => {this.scrollTo(e, "#resume")}}>
                            <i className='bx bx-note'></i>resume
                        </li>
                        <li onClick={(e) => {this.scrollTo(e, "#contact")}}>
                            <i className='bx bx-paper-plane'></i>contact
                        </li>
                    </ul>
                </div>
                <div className="copyright">
                &copy;2022 Brandon Hollowell
                </div>
            </div>
        )
    }
}

export default Sidebar;