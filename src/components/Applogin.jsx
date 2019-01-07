import React, { Component } from 'react';
import $ from 'jquery/dist/jquery.slim';
import axios from 'axios';


class Applogin extends Component {
    state = {
        error_txt:'',
        users_name:'',
        users_password: ''
    }
   
   constructor(props){
    super (props);
  $(document).ready(function(){
    $('.alert').hide();
  });
}

 users_name_Change=(event) => {
     this.setState({ users_name: event.target.value})
 }
 
 users_password_Change=(event) => {
    this.setState({ users_password: event.target.value})
}  
    submitlogin = async (event) =>{
     event.preventDefault();
         let usersname =this.state.users_name;
         let password = this.state.users_password;
      
         if  (usersname !== '' && this.password !==''){
        
            $('.alert').hide();
            let result = await axios.post('http://localhost/netlogapi/users.php',{
                Apikey: 'NetLogApi',
                fn: 'Login',
                users_name:usersname,
                users_password:password
        });                
          if (result.data !== false) {
              let user = result.data;
              delete user.users_password;
              sessionStorage.setItem('loginuser', JSON.stringify(this.users));
              if (user.users_status ==='admin'){
                window.location.replace('/admin');
              }
              else if (user.users_status ==='user'){
                window.location.replace('/user');
              }
            }

             }else {
               this.setState({ errror_txt: 'Please enter Username and Password'});
                $('.alert').show('');
              }              
    }

render () {

 return ( 
    <div id="login" className="container mt-5">
  <div className="card shadow mx-auto px-0 p-md-3 col-12 col-md-6">
    <div className="card-body">
      <h3 className="card-title">login...</h3>
      <div className="card-text">
       
        <form onSubmit={ this.submitlogin}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input type="text" id="users_name" name="users_name" placeholder="Username"
          value={this.state.users_name}
         onChange={ this.users_name_Change}
         className="form-control" />
        </div>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-key"></i>
            </div>
          </div>
          <input type="text" id="password" name="password" placeholder="password"
          value={this.state.users_password}
          onChange={ this.users_password_Change}
          className="form-control" />
        </div>

        <input type="submit" id="login_bt" name="login_bt" value="Login" className="btn btn-primary btn-block" />
      </form>
      </div>
    </div>
  </div>
  <div className="alert alert-danger col-12 col-md-6 col-3 mx-auto text-center" role="alert">
    {this.state.error_txt}
  </div>
</div>

 );
    }
}

export default Applogin;