import React, { Component } from 'react';
import {getUser} from './../api/getUsers'

class dashboard extends Component {
  constructor(props) {
    super(props);
    const token = props.history.location.state.authtoken
    console.log("token", token)
    this.state = {
      userData:'',
      authtoken:token
    };
  }

  async componentWillMount(){
    console.log("in  this")
    try{
      const userResponse = await getUser(this.state.authtoken)
      console.log("userResponse", userResponse)
      console.log(userResponse, "userResponse")
      this.setState({
        userData:userResponse
      })
    }
    catch(error){
      console.log(error)
    }
  }

  createNewUser = () => {
    this.props.history.push('users-new', {authtoken:this.state.authtoken})
  }

  render() {
    console.log(this.props.history, this.state.userData, "userData")
    return (
      <div>
        <button onClick={this.createNewUser}>New User</button>
        <table style={{border:'1px solid #eee', padding:'10px', marginTop:'30px'}}>
          <thead>
            <tr style={{borderBottom:'1px solid #CCC', padding:'10px'}}>
              <th>ACCOUNT ID</th>
              <th>USERNAME</th>
              <th>EMAIL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userData.length ? this.state.userData.map((item, index) =>
              <tr key={index}>
                <td>{item.account_id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <button onClick={() => this.props.history.push('users-edit', { item, authtoken:this.state.authtoken })}>
                    Edit
                  </button>
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default dashboard;
