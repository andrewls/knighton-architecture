import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CaptionedImage from 'components/CaptionedImage';
import ReactRenderer from 'utilities/react-renderer';

class ProjectViewer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      classification: 'All',
      projects: this._projects('All')
    };
  }

  _projects(classification) {
    if (classification === 'All') {
      return _.orderBy(this.props.projects, 'name', 'asc');
    }

    return _.orderBy(
      this.props.projects.filter(p => p.classification === classification),
      'name',
      'asc'
    );
  }

  _setClassification(classification) {
    this.setState({ classification, projects: this._projects(classification)});
  }

  _renderTab(classification) {
    return (
      <div
        key={`${classification}-tab`}
        className={classification === this.state.classification ? 'active project-viewer-tab' : 'project-viewer-tab'}
        onClick={this._setClassification.bind(this, classification)}
      >
        { classification }
      </div>
    )
  }

  _renderProject(project) {
    return (
      <div className='captioned-image col-md-6'>
        <CaptionedImage
          key={project.id}
          image={project.image_path}
          left={`${project.name} | ${project.location}`}
          right={project.status}
        />
      </div>
    );
  }

  render() {
    console.log("Rendering project viewer");
    return (
      <div className='project-viewer'>
        <div className='project-viewer-navigation'>
          { ['All', 'Commercial', 'Residential', 'Community'].map(c => this._renderTab(c)) }
        </div>
        <div className='project-viewer-projects row'>
          { this.state.projects.map(p => this._renderProject(p)) }
        </div>
      </div>
    );
  }
}

ProjectViewer.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    location: PropTypes.string,
    status: PropTypes.string,
    classification: PropTypes.string,
    image_path: PropTypes.string
  }))
};

ReactRenderer.establishClassMapping(ProjectViewer, 'project-viewer');

export default ProjectViewer;
