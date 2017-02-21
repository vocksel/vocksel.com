import React, { Component } from 'react';

import styles from 'css/components/_footer.scss';
import Copyright from './Copyright';

export default class Footer extends Component {
  render() {
    return (
      <footer className={styles.Footer}>
        <ul className={styles['Footer-nav']}>
          <li><Copyright /></li>
          <li><a href="https://github.com/vocksel/my-website">Website Source</a></li>
        </ul>
      </footer>
    );
  }
}
