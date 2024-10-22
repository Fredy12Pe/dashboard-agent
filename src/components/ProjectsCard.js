import React from 'react';
import '../css/ProjectsCard.css';

function ProjectsCard() {
  const projects = [
    { name: 'Chakra Soft UI Version', members: 5, budget: '$14,000', completion: 60 },
    { name: 'Add Progress Track', members: 2, budget: '$3,000', completion: 10 },
    { name: 'Fix Platform Errors', members: 2, budget: 'Not set', completion: 100 },
    { name: 'Launch our Mobile App', members: 4, budget: '$32,000', completion: 100 },
    { name: 'Add the New Pricing Page', members: 4, budget: '$400', completion: 25 },
  ];

  return (
    <div className="projects-card">
      <h3>Projects</h3>
      <p>30 done this month</p>
      <table className="projects-table">
        <thead>
          <tr>
            <th>Companies</th>
            <th>Members</th>
            <th>Budget</th>
            <th>Completion</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.members}</td>
              <td>{project.budget}</td>
              <td>
                <div className="progress-bar" style={{width: `${project.completion}%`}}></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectsCard;