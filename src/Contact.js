import React from "react";

class Contact extends React.Component {
  state = {
    word: "",
    defaultView: true
  };
  handleMouseEnter = () => {
    this.setState({ defaultView: false });
  };

  handleMouseLeave = () => {
    this.setState({ defaultView: true });
  };
  render() {
    const { word } = this.state;
    const { contact, username, description } = this.props;
    const defaultContactView = (
      <div>
        <p>{description}</p>
      </div>
    );
    const selectedContactView = (
      <div id="selected-contact-view">
        <input
          type="text"
          placeholder="Guess"
          className="form-control"
          value={word}
          onChange={e => this.setState({ word: e.target.value })}
        />
        <img
        id="guess-button"
          onClick={contact}
          value={word}
          src={require("./images/guess_button.jpg")}
        />
      </div>
    );

    return (
      <div
        id="contact-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div id="player-info">
          <img
            id="player-photo"
            src={require("./images/player_photo.jpg")}
            alt="player photo"
          />
          <h3>{username}</h3>
        </div>
        <div id="contact-view">
          {this.state.defaultView ? defaultContactView : selectedContactView}
        </div>
      </div>
    );
  }
}

export default Contact;
