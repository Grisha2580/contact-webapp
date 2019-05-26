import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authorization from './Authorization.js';
import Alert from 'react-bootstrap/Alert';



class App extends React.Component {
  state = {
    input: ''
  }
 handleSubmitClick = input => {
   input.preventDefault();
   const form = this.tartget
   console.log(input.target.formBasicEmail.value)
   this.setState({input: 'heeeeelo'})

  }

  render( ) {
    const {input} = this.state
    return (
      <div>
        <Authorization onClick={this.handleSubmitClick}/>
        <p> Here is our input {input} </p>
      </div>
    );
  }


}



export default App;
