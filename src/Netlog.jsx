import React, { Component } from 'react';
import './Netlog.css';
import Appheader from './components/Appheader';
import Applogin  from './components/Applogin';
class Netlog extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Appheader />
                <Applogin />
            </div>
        );
    }
}
 
export default Netlog;
