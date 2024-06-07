import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectEntryProps {
  href: string;
  title: string;
  description: string;
  technologies: string;
}

const ProjectEntry: React.FC<ProjectEntryProps> = ({ href, title, description, technologies }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(href);
  };

  return (
    <div
      onClick={handleClick}
      className="p-4 bg-black text-white rounded-lg mb-4 shadow-lg transform transition-transform hover:-translate-y-1 cursor-pointer"
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <p><b>Technologies:</b> {technologies}</p>
    </div>
  );
};

export default ProjectEntry;
