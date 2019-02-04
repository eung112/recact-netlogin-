import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Deleteusers extends Component {

state = {
    deluser: {},
    submit_form: ''
}

async componentDidMount() {
let result = await axios.post('http://localhost/netlogapi/users.php', {
    Apikey: 'NetLogApi',
    fn: 'SelectById',
    users_name: this.props.match.params.users_name

});

this.setState({
    deluser: result.data

    });

}

submit_form_click = (event) => {
    this.setState({submit_form: event.target.value});
}

submitdeluser = async (event) => {
    event.preventDefault();
    if(this.state.submit_form == 'Delete'){

        this.state.deluser.Apikey = 'NetLogApi';
        this.state.deluser.fn = 'Delete';

        let result = await axios.post('http://localhost/netlogapi/users.php',this.state.deluser);

        if(result.data == true){
            alert('Deleted');

        }else{
            alert('Deleted Mistake');
        }
        window.location.replace('#/admin/users');
    } else{
        window.location.replace('#/admin/users');
    }
}

render() {
return (
<div>
    <div id="mu-toolsbar" className="mt-3">

        <Link to="/admin/users">
        <i className="fa fa-arrow-circle-left fa-3x"></i>
        </Link>

    </div>
    <div className="card shadow mx-auto px-0 p-md-3 col-12 col-md-6">
        <div className="card-body">
            <h3 className="card-title">Delete User...</h3>
            <div className="card-text">

            <form onSubmit={ this.submitdeluser }>
                    <div className="row mb-3 pl-5">
                       <b>Username : </b>&nbsp; { this.state.deluser.users_name}   
                    </div>

                    <div className="row mb-3 pl-5">
                       <b>Fullname : </b>&nbsp; { this.state.deluser.users_fullname}   
                    </div>

                    <div className="row mb-3 pl-5">
                       <b>Status : </b>&nbsp; { this.state.deluser.users_status}   
                    </div>

                    <div className="row">
                    <input type="submit" id="delete_bt" name="delete_bt" value="Delete" className="btn btn-danger btn-lg col-md-5 mx-auto" onClick={ this.submit_form_click } />

                    <input type="submit" id="cancle_bt" name="cancle_bt" value="Cancle" className="btn btn-secondary btn-lg col-md-5 mx-auto" onClick={ this.submit_form_click } />
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
);
}
}

export default Deleteusers;