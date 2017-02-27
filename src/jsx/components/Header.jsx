import React, { Component } from 'react';
import { Link } from 'react-router';

import nav from './navigation/NavLink.scss';
import styles from './Header.scss';
import { Section } from './layout';
import PrimaryNav from './navigation/PrimaryNav';

export default class Header extends Component {
  render() {
    return (
      <Section className={styles.base}>
        <div className={styles.name}>
          <Link to="/" className={nav.link}>David Minnerly</Link>
        </div>

        <div className={styles.nav}>
          <PrimaryNav />
        </div>
      </Section>
    );
  }
}
