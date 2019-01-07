import React, {Component} from 'react';
import Adminheader  from './components/Adminheader';

class NetlogAdmin extends Component {
    state = { }

    constructor (props) {
        super(props);
        let loginuser = JSON.parse(sessionStorage.getItem('loginuser'))||{users_status:''};
    
        if(loginuser.users_status !=='admin'){
            window.location.replace('/');
        }
        }
    render (){
        return (
            <div>
                <Adminheader/>

                Admin
            </div>
            
        );
    }
}

export default NetlogAdmin;