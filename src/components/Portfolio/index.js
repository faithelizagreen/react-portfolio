import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'Take A Hike',
      description: 'Hiking website made with Javascript, CSS & HTML',
      link: "https://faithelizagreen.github.io/take-a-hike",
      repo: "https://github.com/faithelizagreen/take-a-hike"
    },
    {
      name: 'Library Curator',
      description: 'Library Management Website',
      link: "https://faithelizagreen.github.io/library-curator",
      repo: "https://github.com/faithelizagreen/library-curator"
    },
    {
      name: 'Lord of the Rings Code Quiz',
      description: 'Javascript Quiz to test your LOTR knowledge',
      link: "https://faithelizagreen.github.io/code-quiz/",
      repo: "https://github.com/faithelizagreen/code-quiz"
    },
    {
      name: 'Code Refactor',
      description: 'Refactored HTML & CSS',
      link: "https://faithelizagreen.github.io/code_refactor/",
      repo: "https://github.com/faithelizagreen/code_refactor"
    },
    {
      name: 'Password Generator',
      description: 'Create random passwords using Javascript',
      link: "https://faithelizagreen.github.io/password_generator/",
      repo: "https://github.com/faithelizagreen/password_generator"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;