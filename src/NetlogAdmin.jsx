import React, { Component } from 'react';
import Adminheader from './components/Adminheader';
import Welcomeuser from './components/Welcomeuser';
import Manageuser from'./components/Manageuser';
import Editusers from'./components/Editusers';
import { Switch ,Route} from 'react-router-dom';
class NetlogAdmin extends Component {

    state = {  }


    
    constructor(props){
        super(props);
        let loginuser = JSON.parse(sessionStorage.getItem('loginuser')) || {users_status: ''};
        if(loginuser.users_status !== 'admin'){
            window.location.replace('/');
    }
}
    render() { 
        return ( 
            <div>
                <Adminheader />
                <Switch>
                    <Route exact path ="/admin" component={Welcomeuser}/>
                    <Route path ="/admin/users" component={Manageuser}/>
                    <Route path ="/admin/editusers/:users_name" component={Editusers}/>
                </Switch>

            </div>
        );
    }
}
 
export default NetlogAdmin;
