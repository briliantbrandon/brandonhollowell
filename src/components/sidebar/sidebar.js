import React from "react"
import logo from '../../images/website-logo-alt.png';
import './sidebar.css';

class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: true,
            current: 'Home'
        }
        this.myRefs = this.props.myRefs;
        console.log(this.myRefs);
    }

    toggleOpen() {
        this.setState({open: !this.state.open})
        console.log(this.state.open)
    }

    moveTo(e, location) {
        e.preventDefault();
        window.location.replace('/' + location);
    }

    render() {
        if(this.state.open) {
            return (
                <div className="Sidebar">
                    <div className="Sidebar-logo">
                        <img src={logo} alt="Banner Logo" />
                    </div>
                    <div className="Sidebar-Navigation">
                        <ul>
                            <li onClick={(e) => {this.moveTo(e, "#home")}}>
                                <i className='bx bx-home'></i>home
                            </li>
                            <li onClick={(e) => {this.moveTo(e, "#about")}}>
                                <i className='bx bxs-user'></i>about
                            </li>
                            <li onClick={(e) => {this.moveTo(e, "#projects")}}>
                                <i className='bx bx-desktop'></i>projects
                            </li>
                            <li onClick={(e) => {this.moveTo(e, "#resume")}}>
                                <i className='bx bx-note'></i>resume
                            </li>
                            <li onClick={(e) => {this.moveTo(e, "#contact")}}>
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
}

export default Sidebar;