import React, { Component } from 'react';
import $ from 'jquery';

import style from './ContactForm.scss';

class SendButton extends Component {
  constructor(props) {
    super(props);

    this.getIconClasses = this.getIconClasses.bind(this);
  }

  getIconClasses() {
    if (this.props.processing) {
      return 'fa fa-cog fa-spin';
    } else {
      return 'fa fa-paper-plane-o';
    }
  }

  render() {
    if (this.props.visible) {
      return (
        <button disabled={this.props.processing} type="submit">
          Send <i className={this.getIconClasses()} />
        </button>
      );
    } else {
      return null;
    }
  }
}

class SendFailed extends Component {
  render() {
    if (this.props.visible) {
      return (
        <div>
          <p className={style.error}>Failed to communicate with the server, please try again later.</p>

          <p>If the issue persists, please message me on <a href="https://twitter.com/voxeldavid">Twitter</a> and I'll get to the bottom of it.</p>
        </div>
      );
    } else {
      return null;
    }
  }
}

class SuccessButton extends Component {
  render() {
    if (this.props.visible) {
      return (
        <button disabled className={style.success}>
          Success! Your message has been sent, thank you! <i className="fa fa-heart" />
        </button>
      );
    } else {
      return null;
    }
  }
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',

      processing: false,
      sent: false,
      sendFailed: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate(field) {
    return field.value.length > 0;
  }

  handleInputChange(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.value
    });
  }

  // HACK handleFocus and handleBlur both set the target's className to an empty
  // string. This is because none of the input fields have classes, so we don't
  // need to worry about retaining their defaults.
  //
  // If this changes in the future, we'll need to handle resetting the 'invalid'
  // class different.

  handleFocus(event) {
    event.target.className = '';
  }

  handleBlur(event) {
    const target = event.target;
    const isValid = this.validate(target);

    if (!isValid) {
      target.className = style.invalid;
    } else {
      // None of our fields have class names, so we can get away with simply
      // setting it to an empty string when the input is valid.
      target.className = '';
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.state.processing) {
      this.setState({ processing: true });

      $.ajax({
        url: 'http://contact.davidminnerly.com',
        type: 'POST',
        data: {
          name: this.state.name,
          email: this.state.email,
          message: this.state.message
        }
      })
      .done(() => this.setState({ sent: true, sendFailed: false }))
      .fail(() => this.setState({ processing: false, sendFailed: true }));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={style.base}>
        <div className={style.userField}>
          <label htmlFor="name">Full name:</label>
          <input
            required
            disabled={this.state.processing}
            id="name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={this.state.name}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur} />
        </div>

        <div className={style.userField}>
          <label htmlFor="email">Email:</label>
          <input
            required
            disabled={this.state.processing}
            id="email"
            type="email"
            name="email"
            placeholder="john@example.com"
            value={this.state.email}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur} />
        </div>

        <div className={style.messageField}>
          <label htmlFor="message">Message:</label>
          <textarea
            required
            disabled={this.state.processing}
            id="message"
            name="message"
            placeholder="What's on your mind?"
            value={this.state.message}
            onChange={this.handleInputChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur} />
        </div>

        <div className={style.submit}>
          <SendButton visible={!this.state.sent} failed={this.state.sendFailed}
            processing={this.state.processing} />

          <SuccessButton visible={this.state.sent} />

          <SendFailed visible={this.state.sendFailed} />
        </div>
      </form>
    );
  }
}
