import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarrySky from './StarrySky';

const JavaRoboticsProject: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-black text-white font-courier">
            <StarrySky />
            <div className="absolute w-full h-full z-0 starry-sky"></div>
            <div className="relative flex flex-col items-center w-full p-4 z-10">
                <button
                    className="absolute top-5 left-5 bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-300 hover:text-black transition-colors duration-200"
                    onClick={() => {
                        console.log("Button clicked");
                        navigate('/');
                    }}
                >
                    Back
                </button>
                <aside className="bg-white text-black p-8 rounded-xl shadow-lg max-w-3xl w-full text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">Java Robotics Project</h1>
                    <p>An overview of my first Java project: programming a multifunctional competition robot.</p>
                </aside>
                <section className="bg-white text-black p-8 rounded-xl shadow-lg max-w-3xl w-full mb-8">
                    <header className="mb-4">
                        <h2 className="text-3xl font-bold">FRC Rapid React Robot Code</h2>
                    </header>
                    <article className="space-y-4">
                        <p>This project was my first experience programming in Java, where I worked on a robot capable of performing various tasks in a competitive environment.</p>
                        <h3 className="text-2xl font-bold">Robot Capabilities:</h3>
                        <ul className="list-disc list-inside">
                            <li><b>Ball Handling:</b> Picking up and shooting balls into designated hoops.</li>
                            <li><b>Climbing:</b> Ability to climb on bars and pull itself up.</li>
                            <li><b>Extendable Intake System:</b> Extendable intake mechanism designed for rapid and efficient ball pick-up and manipulation.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">Technical Features:</h3>
                        <ul className="list-disc list-inside">
                            <li><b>Image Tracking with OpenCV:</b> Implementing image recognition to augment robot navigation and task execution.</li>
                            <li><b>Autonomous Programs:</b> Developing programs for autonomous robot operation, allowing for sophisticated maneuvers without direct control.</li>
                            <li><b>Safety and Efficiency:</b> Utilizing an array of IR sensors as limit switches to enhance safety and control.</li>
                            <li><b>Limelight:</b> Integrating Limelight for enhanced targeting, enabling the robot to automatically align with goals and adjust power settings for precise ball shooting.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">What I Learned:</h3>
                        <ol className="list-decimal list-inside">
                            <li>Java Programming: Gaining a foundational understanding of Java in a practical, project-based environment.</li>
                            <li>Robotics Integration: Learning how to integrate hardware and software for complex robotic tasks.</li>
                            <li>Team Collaboration: Working within a team to develop, test, and refine robotic functionalities.</li>
                            <li>Image Processing and Recognition with OpenCV: Acquired knowledge in advanced image processing techniques using OpenCV for real-time robotic applications.</li>
                        </ol>
                        <p>For more insights into this project, please visit my <a className="text-blue-500 underline" href="https://github.com/PelleKrab/3648-Comp-2022">GitHub repository</a>.</p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default JavaRoboticsProject;
