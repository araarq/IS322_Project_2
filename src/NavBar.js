import React from 'react';
import './styles/NavBar.css';

const NavBar = props => {
    if (props.view === "gridView") {
        return (
            <div className="row">
                <header className="col-sm">
                    <nav className="navbar navbar-expand-sm">
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link current" href="#">Grid View</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link notCurrent" href="#" onClick={props.onClick}>Add Task</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
    else {
        return (
            <div className="row">
                <header className="col-sm">
                    <nav className="navbar navbar-expand-sm">
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link notCurrent" href="#" onClick={props.onClick}>Grid View</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link current" href="#">Add Task</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
};

export default NavBar;