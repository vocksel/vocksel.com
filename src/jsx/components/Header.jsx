import React, { Component } from 'react';
import { Link } from 'react-router';

import nav from './navigation/NavLink.scss';
import styles from './Header.scss';
import { Section, Content } from './layout';
import PrimaryNav from './navigation/PrimaryNav';

export default class Header extends Component {
  render() {
    return (
      <Section className={styles.base}>
        <Content half>
          <Link to="/" className={nav.link}>David Minnerly</Link>
        </Content>

        <Content half>
          <PrimaryNav />
        </Content>
      </Section>
    );
  }
}
