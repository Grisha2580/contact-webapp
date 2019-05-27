import React from "react";
import Contact from "./Contact";
import ChatSocket from "./ChatSocket";

class Chat extends ChatSocket {
  constructor(props) {
    super(props);

    this.state = {
      room: null,
      message: "",
      guess: "",
      contact_word: "",
      description: "",
      contacts: [],
      messages: []
    };
    this.join_room();
  }

  render() {
    const { room } = this.state;
    const empty_state = (
      <h2 id="empty-contact-list"> Be the first one to create Contact!</h2>
    );
    const non_empty_state = (
      <div className="contacts">
        {this.state.contacts.map(message => {
          return (
            <Contact
              username={message.username}
              description={message.description}
              contact={this.contact}
            />
          );
        })}
      </div>
    );
    return (
      <div className="contacts-container">
        <p>The room is {room}</p>

        {this.state.contacts.length == 0 ? empty_state : non_empty_state}

        <div id="create-new-contact">
          <div id="new-contact-form">
            <input id="word-input"
              type="text"
              placeholder="Word"
              value={this.state.contact_word}
              onChange={ev => this.setState({ contact_word: ev.target.value })}
              className="form-control"
            />
            <input
              type="text"
              placeholder="Description"
              value={this.state.description}
              onChange={ev => this.setState({ description: ev.target.value })}
              className="form-control"
            />
          </div>
          <img
            onClick={this.new_contact}
            id="create-contact-btn"
            src={require("./images/send_button.jpg")}
            alt="Send Contact Button"
          />
        </div>
      </div>
    );
  }
}

export default Chat;
