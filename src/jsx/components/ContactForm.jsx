import React, { Component } from 'react';

import style from './ContactForm.scss';

export default class ContactForm extends Component {
  render() {
    return (
      <form action="http://contact.davidminnerly.com" method="post" className={style.base}>
        <div className={style.userField}>
          <label htmlFor="name">Full name:</label>
          <input id="name" type="text" name="name" placeholder="John Doe" />
        </div>

        <div className={style.userField}>
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" name="email" placeholder="john@example.com" />
        </div>

        <div className={style.messageField}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" placeholder="What's on your mind?"></textarea>
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
