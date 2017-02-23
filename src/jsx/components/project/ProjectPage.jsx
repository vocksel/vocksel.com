import React, { Component, PropTypes } from 'react';

import { Section, Content, Title } from 'jsx/components/layout';
import ProjectGallery from './ProjectGallery';

export default class ProjectPage extends Component {
  render() {
    return (
      <div>
        <Section>
          <Content>
            <Title>{this.props.name}</Title>

            <ProjectGallery images={this.props.images} />

            <ul>
              <li><i className="fa fa-clock-o" /> {this.props.released}</li>
              <li><i className="fa fa-tags" /> {this.props.tags.join(', ')}</li>
            </ul>
          </Content>

          <Content>
            {this.props.children}
          </Content>
        </Section>
      </div>
    );
  }
}

ProjectPage.propTypes = {
  name: PropTypes.string.isRequired,
  released: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string
  ]).isRequired,
  tags: PropTypes.array
};
