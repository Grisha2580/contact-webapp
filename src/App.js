import React from 'react';
import logo from './logo.svg';
import './App.css';
import Authorization from './Authorization.js';
import Alert from 'react-bootstrap/Alert';
import Chat from "./Chat";


class App extends React.Component {
  state = {
      username: '',
      started: false
  };

  changeUsername = event => {
      this.setState({username: event.target.value})
  };

  start_game = () => {
    this.setState({started: true})
  };




  render() {
    const {started, username} = this.state;

    const initScreen = <div><input type="text" placeholder="Username" value={this.state.username} onChange={this.changeUsername}/>
        <button onClick={this.start_game}>Start game</button>
        </div>;

    const chatScreen = <Chat username={username}/>;

    return (
      <div>
          {started ? chatScreen : initScreen}
      </div>
    );
  }

}



export default App;
