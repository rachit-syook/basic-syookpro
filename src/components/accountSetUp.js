import React, { Component } from 'react';
import {signUpUser} from './../api/signup'

class AccountSetUpPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            email:'',
            businessname:'',
            subdomain:'',
            ismobileValid:true
        };
    }

    updateUserName = (e) => {
        this.setState({
            username:e.target.value
        })
    }

    updateUserPassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }

    // updateUserMobile = (e) => {
    //     this.setState({
    //         mobile:e.target.value
    //     })
    // }

    updateUserEmail = (e) => {
        this.setState({
            email:e.target.value
        })
    }

    updateUserBusinessName = (e) => {
        this.setState({
            businessname:e.target.value
        })
    }

    updateUserSubdomain = (e) => {
        this.setState({
            subdomain: e.target.value
        })
    }

    handleClick = async () => {
        const signUpJson = {
            business_name: this.state.businessname,
            subdomain: this.state.subdomain,
            email: this.state.email,
            password: this.state.password,
            username: this.state.username
          }

        console.log("in this")
        try{
          const signupResponse = await signUpUser(signUpJson)
          if(signupResponse.success){
            this.props.history.push('/login')
          }
        }
        catch(error){
          console.log(error)
        }
    }

  render() {
    console.log(this.props.history)

    const formStyle = {
        padding: 20,
        backgroundColor: "#eee",
        width:1000,
        border:'1px solid #eee',
        marginTop:30,
        textAlign:'center'
    };

    const labelStyle = {
        color:'#999',
        width:150,
        display:'inline-block'
    }

    const divStyle = {
        padding:10
    }

    const inputStyle={
        padding:6,
        width:300,
    }

    return (
        <div style={formStyle}>
            <h2>Sign Up Page</h2>

            <button type="button" onClick={() => this.props.history.goBack()}>Back</button>

            <div style={divStyle}>
                <label style={labelStyle}>User Name:</label>
                <input name="username" type="text" style={inputStyle} onChange={this.updateUserName}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Password:</label>
                <input name="password" type="text" style={inputStyle} onChange={this.updateUserPassword}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Email:</label>
                <input name="email" type="text" style={inputStyle} onChange={this.updateUserEmail}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Business Name:</label>
                <input name="businessname" type="text" style={inputStyle} onChange={this.updateUserBusinessName}/>
            </div>

            <div style={divStyle}>
                <label style={labelStyle}>Subdomain:</label>
                <input name="subdomain" type="text" style={inputStyle} onChange={this.updateUserSubdomain}/>
            </div>

            <div>
                <button onClick={this.handleClick}>Signup</button>
            </div>
        </div>
    );
  }
}

export default AccountSetUpPage;
