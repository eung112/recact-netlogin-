import React, {Component} from 'react';

class Manageuser extends Component {
    state = {}
    render (){
    return(    
        <div>
            <div id = "mu-toolsbar"></div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Status</th>
                    </tr>
                </thead>
            </table>
        </div>
    );
    }
}
export default Manageuser;