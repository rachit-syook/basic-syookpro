import React, { Component } from 'react';

class HomePage extends Component {

  render() {
    console.log(this.props.history)
    return (
      <div style={{marginTop:'20px', padding:'10px'}}>
        <button type="button" name="signup" style={{marginRight:'10px'}} onClick={() => this.props.history.push('/signup')}>Signup </button>
        <button type="button" name="login" onClick={() => this.props.history.push('/login')}>Login </button>
      </div>
    );
  }
}

export default HomePage;
