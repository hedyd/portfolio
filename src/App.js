import React, { Component } from 'react';
import Project from './Project/Project';
import projectData from './Project/data.json';

class App extends Component {
  render() {
    const projects = projectData.map((project, index) => {
      return <Project key={index} index={index} {...project} />
    });

    return (
      <div className="App">
        {projects}
      </div>
    );
  }
}

export default App;
