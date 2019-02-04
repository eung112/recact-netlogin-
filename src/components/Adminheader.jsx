import React, { Component } from 'react';
import './Adminheader.css';
import {Link} from 'react-router-dom';
class Adminheader extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-pink shadow-lg">
                <Link className="navbar-brand" to={'/admin'}>
                    <img src="./assets/reactjs_logo.png" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'admin/users'}>Users</Link>
                        </li>
                      
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Adminheader;