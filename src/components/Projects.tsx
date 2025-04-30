import React from 'react';
import ProjectEntry from './ProjectEntry';

const Projects: React.FC = () => (
  <section className="p-8 mx-48 bg-white rounded-xl shadow-lg text-black mt-8">
    <header className="text-center mb-8">
      <h2 className="text-3xl font-bold">My Projects</h2>
      <p>An incomplete collection of things I have worked on over the years. <br />Click on a project to learn more!</p>
    </header>
    <ProjectEntry 
          href="/CommitBoost-Charon" 
          title="Charon x CommitBoost" 
          description="A case study on the compatibility of CommitBoost with Charon, Obol's distributed validator middleware." 
          technologies="Docker, Python, Bash, Ethers.js" 
        />
    <ProjectEntry 
          href="/EIP7702TechnicalDive" 
          title="A Technical Dive into EIP-7702" 
          description="An in-depth exploration of how EIP-7702 will revolutionize Ethereum usability. This entry covers the motivation behind EIP-7702, its functionality, transaction schema, and how it enables EOAs to act as smart contract wallets while retaining their original properties." 
          technologies="N/A" 
        />
    <ProjectEntry 
      href="/ConsiderThisBerkeleyHack" 
      title="Consider This (UC Berkeley AI Hackathon)" 
      description="A hackathon project focused on using AI for positive societal impact in education. Our team developed an ed-tech platform called 'Consider This', designed to foster healthy, empathetic discussions with AI agents for K-12 students. The platform emulates a Socratic Seminar environment, helping students engage in rich, human-like dialogue and learn divergent perspectives." 
      technologies="React, Next.js, Vite, TypeScript, AI, OpenAI, Hume AI" 
    />
    <ProjectEntry
      href="/ECOBitesBSWHackathon"
      title="ECO Bites (Boulder Startup Week Hackathon)"
      description="A hackathon project aimed at promoting sustainability within the restaurant industry. Our team developed a React-based website that uses AI to rate restaurants on their sustainability practices."
      technologies="React, TypeScript, nextJS, AI, Claude 3, and AWS"
    />
    <ProjectEntry
      href="/rust-blockchain"
      title="Rust Blockchain"
      description="A Rust-based project focused on teaching me the basics of blockchain, multithreading, and cryptography. It highlights key blockchain functionalities such as transaction processing, block mining, and transaction validation, offering a practical introduction to these foundational technologies."
      technologies="Rust, Multithreading, and Blockchain"
    />
    <ProjectEntry
      href="/frc-java-framework"
      title="FRC Java Framework"
      description="A command-based framework that allows teams to easily program their robot using XML for FIRST Robotics Competition (FRC). This framework is designed to simplify the programming process and make it easier for teams to focus on building their robot."
      technologies="Java, OpenCV, PID, and WPILib"
    />
    <ProjectEntry
      href="/java-robotics-project"
      title="FRC Rapid React"
      description="This project marked my debut in the world of the First Robotics Competition (FRC) and Java programming. While it may not represent my finest code, it enabled us to compete at a high level during our FRC regionals."
      technologies="Java, OpenCV, and WPILib"
    />
    <ProjectEntry
      href="/space-shooter-project"
      title="Multiplayer Space Shooter"
      description="Asteroids inspired, multiplayer web game. Players control a ship with a basic cannon for combat. This project was created in collaboration with Will Franco and Zachary Zabel for a sophomore year project."
      technologies="JavaScript, CSS, HTML, Socket.io, and web hosting"
    />
  </section>
);

export default Projects;
