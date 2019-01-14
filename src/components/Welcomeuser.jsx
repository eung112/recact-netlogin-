import React, {Component} from 'react';
import './Welcomeuser.css'

class Welcomeuser extends Component {
    state ={
        users_name:'',
        users_fullname:'',
        users_phone:'',
        users_email:'',
    }

    constructorDidCatch(){
        let userlogin = JSON.parse(sessionStorage.getItem('loginuser')) || this.setState;
        this.setState(userlogin);
    }
    render (){
     return (
            <div className="mt-5 col-md-7 mx-auto">
                <div className="card-header bg-info text-white">
                <h2>Welcome!!!</h2>
             </div>
             </div>
               
           
        );
    }
}
export default Welcomeuser;