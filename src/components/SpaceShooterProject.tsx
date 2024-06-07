import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarrySky from './StarrySky';

const SpaceShooterProject: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="relative flex flex-col items-center min-h-screen bg-black text-white font-courier">
            <StarrySky />
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
                    <h1 className="text-4xl font-bold mb-4">Multiplayer Space Shooter</h1>
                    <p>Initial foray into game development with a focus on multiplayer interaction and front-end design.</p>
                </aside>
                <section className="bg-white text-black p-8 rounded-xl shadow-lg max-w-3xl w-full">
                    <header className="mb-4">
                        <h2 className="text-3xl font-bold">Project Overview</h2>
                    </header>
                    <article className="space-y-4">
                        <p>Our Multiplayer Space Shooter is a simple 2D spaceship shooter based on the game Asteroids. The project was created using JavaScript and the Socket.io library. It was a collaborative effort between me and two other friends.</p>
                        <h3 className="text-2xl font-bold">My Contribution:</h3>
                        <ul className="list-disc list-inside">
                            <li>Front-End Development: Designing the user interface and developing a single-player proof of concept.</li>
                            <li>Game Mechanics: Assisted in the development of the game mechanics and design.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">Team Efforts:</h3>
                        <ul className="list-disc list-inside">
                            <li>Tutorial Creation: Zachary Zabel focused on developing an engaging and informative game tutorial.</li>
                            <li>Back-End Development: William Franco handled server-side logic and game hosting, ensuring smooth multiplayer experiences.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">Game Features:</h3>
                        <ul className="list-disc list-inside">
                            <li><b>Retro Control Scheme:</b> Emulating the classic 'Asteroids' game for an intuitive and nostalgic feel.</li>
                            <li><b>Multiplayer Dynamics:</b> Creating a competitive 'King of the Hill' style gameplay, popular in .io games, using Socket.io.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">What I Learned:</h3>
                        <ol className="list-decimal list-inside">
                            <li>Front-End Game/Web Development</li>
                            <li>Collaborative Project Management</li>
                            <li>Real-time Multiplayer Game Mechanics</li>
                            <li>Socket.io for Client-Server Communication</li>
                        </ol>
                        <h3 className="text-2xl font-bold">Learn More:</h3>
                        <p>The project's codebase is currently inaccessible, as it resides on a team member's personal desktop. This project was completed 3 years ago, and I am in the process of retrieving the code to upload it to GitHub.</p>
                    </article>
                </section>
            </div>


        </div>


    );
};

export default SpaceShooterProject;
