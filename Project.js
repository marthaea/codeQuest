// src/pages/Project.js
import React, { useState } from 'react';
import { projects } from '../data';
import Card from './Card';
//import Button from '../components/Button';
import Button from './Button';
import './home.css'

const Project = () => {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);

  const handleAddProject = () => {
    // Placeholder function to add a new project
    setShowNewProjectForm(!showNewProjectForm);
  };

  return (
    <div className='background'>
      <h2>Projects</h2>
      <Button label="Create New Project" onClick={handleAddProject} />
      
      {showNewProjectForm && (
        <form>
          <input type="text" placeholder="Project Title" />
          <textarea placeholder="Project Description" />
          <Button label="Add Project" onClick={() => alert('Project Added')} />
        </form>
      )}

      <div className="project-list">
        {projects.map((project) => (
          <Card key={project.id} title={project.title}>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
            <Button label="View Details" onClick={() => alert(`Viewing ${project.title}`)} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Project;
