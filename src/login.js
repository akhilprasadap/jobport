import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class Login extends Component {
    constructor(props) {

        super(props);

        this.state = {

        }
    }

    login = () => {
       
        var email = this.refs.email.value;
        var password = this.refs.password.value;

        axios.post('', {
                
                password: password,
                email: email,
                
            })
            .then(function(response) {
                console.log(response);
                if (response.data.message) { 
                    alert(response.data.message); 
                }
                if (response.data.errorMsg) { 
                    alert(response.data.errorMsg); 
                }

            })
            .catch(function(error) {
                console.log(error);
            });

    }

render() {
        return (
                <div>
         <div className="Loginform">
         <h1>LOGIN</h1>
            <table>
                
                <tr>
                    
                    <td><input type="email" ref="email" placeholder="Enter your Email" /></td>
                </tr>
                <tr>
                    
                    <td><input type="password" ref="password" placeholder="Enter your Password"></td>
                </tr>
                
                <tr>                
                    <td><button onClick={this.login}>Login</button></td>
                </tr>

            </table>
         </div>
      </div>
    );
}
}
export default Login;