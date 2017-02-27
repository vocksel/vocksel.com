import React, { Component } from 'react';
import $ from 'jquery';

import style from './ContactForm.scss';

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    $.ajax({
      url: 'http://contact.davidminnerly.com',
      type: 'POST',
      data: {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }
    })
    .done(() => alert('Form sent!'));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.base}>
        <div className={style.userField}>
          <label htmlFor="name">Full name:</label>
          <input
            required
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={this.state.name}
            onChange={this.handleInputChange} />
        </div>

        <div className={style.userField}>
          <label htmlFor="email">Email:</label>
          <input
            required
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            value={this.state.email}
            onChange={this.handleInputChange} />
        </div>

        <div className={style.messageField}>
          <label htmlFor="message">Message:</label>
          <textarea
            required
            id="message"
            name="message"
            placeholder="What's on your mind?"
            value={this.state.message}
            onChange={this.handleInputChange} />
        </div>

        <div className={style.submit}>
          <button type="submit" className={style.send}>
            Send <i className="fa fa-paper-plane-o" />
          </button>
        </div>
      </form>
    );
  }
}
