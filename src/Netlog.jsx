import React, { Component } from 'react';
import './Netlog.css';
import Appheader from './components/Appheader';
import Applogin  from './components/Applogin';
import NetlogAdmin from './NetlogAdmin';
import Route from 'react-router-dom';
class Netlog extends Component {
    state = {  }
   constructor(props){
    super (props);
    sessionStorage.clear();

   }

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
