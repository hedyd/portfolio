import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  render() {
    const responsibilities = this.props.responsibilities.map((item, index) => <li key={index} className="list-item">{item}</li>);
    return (
      <div className="project">
        <div className="container container-one">
          <h2 className="title">{this.props.title}</h2>
          <div className="job">{this.props.job} {this.props.year}</div>
          <div className="skills">
            <h3 className="subtitle">Skills</h3>
            <div className="skills-text">{this.props.skills.join(', ')}</div>
          </div>
        </div>
        <div className="container container-two">
          <div className="image">
            <img src={`images/${this.props.image}`} alt="" />
          </div>
          <div className="text">
            <div className="summary">
              <h3 className="subtitle">Summary</h3>
              <div className="summary-text">{this.props.summary}</div>
            </div>
            <div className="res">
              <h3 className="subtitle">Responsibilities</h3>
              <ul className="list">
                {responsibilities}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
