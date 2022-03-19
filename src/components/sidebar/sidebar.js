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
    }

    toggleOpen() {
        this.setState({open: !this.state.open})
        console.log(this.state.open)
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
                            <li><i class='bx bx-home'></i>home</li>
                            <li><i class='bx bxs-user'></i>about</li>
                            <li><i class='bx bx-desktop'></i>projects</li>
                            <li><i class='bx bx-note'></i>resume</li>
                            <li><i class='bx bx-paper-plane'></i>contact</li>
                        </ul>
                    </div>
                </div>
            )
        }
    }
}

export default Sidebar;