import React from 'react';
import headshot from '../assets/images/headshot.jpg';
import Arrow from './Arrow';

const InfoContainer: React.FC = () => (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center p-8 px-80 mt-48 bg-white rounded-xl shadow-lg text-black">
            <img className="rounded-full w-32 h-32 mb-4" src={headshot} alt="Profile Picture" />
            <div className="text-xl font-bold">Pelle Krabbenhoeft</div>
            <div className="text-lg mb-4">Developer, Hacker, and Pilot</div>
            <div className="flex space-x-4">
                <a className="text-xl" href="https://www.linkedin.com/in/pellekrab" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a className="text-xl" href="https://github.com/PelleKrab" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                </a>
                <a className="text-xl" href="mailto:pellekrab.1440g@passmail.net">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
        </div>
        <div className="flex-grow"></div> {/* Add this div to push the arrow to the bottom */}
        <Arrow />
    </div>
);

export default InfoContainer;
