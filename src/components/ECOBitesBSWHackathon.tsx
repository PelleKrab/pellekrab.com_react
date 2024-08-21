import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarrySky from './StarrySky';

const RustBlockchainProject: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="relative flex flex-col items-center min-h-screen bg-black text-white font-courier">
            <StarrySky />
            <div className="absolute w-full h-full starry-sky z-0"></div>
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
                    <h1 className="text-4xl font-bold mb-4">ECO Bites</h1>
                    <p>First Hackathon, React Project, AI Project, and Hackathon Win</p>
                </aside>
                <section className="bg-white text-black p-8 rounded-xl shadow-lg max-w-3xl w-full mb-8">
                    <header className="mb-4">
                        <h2 className="text-3xl font-bold">Project Overview</h2>
                    </header>
                    <article className="space-y-4">
                        <p>The goal of this hackathon was to create something that would positively impact our local community. Sponsored by Zed Industries, Webflow, Freeplay.ai, and TechnicalIntegrity.com, our team of three—Grayson, Uma, and myself—built a website to rate restaurants on their sustainability using AI. Our platform also featured a custom chatbot and dashboard to help restaurants set goals and improve their sustainability practices. Additionally, we created a frontend interface for users to view the sustainability scores of local restaurants. This was my first-ever hackathon, and I had no idea what to expect. I had to learn a lot of new skills in a very short time, and I’m certain this won’t be my last hackathon experience.</p>
                        <h3 className="text-2xl font-bold">Project Objectives:</h3>
                        <ul className="list-disc list-inside">
                          <li>Leverage AI to rate sustainability practices.</li>
                          <li>Learn React and TypeScript.</li>
                          <li>Create something that benefits our community.</li>
                          <li>Win the hackathon.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">Key Features:</h3>
                        <ul className="list-disc list-inside">
                          <li><strong>AI Rubric</strong>: After researching restaurant practices and their environmental impact, we distilled the information into a format that allows our AI model to evaluate overall sustainability. This provided a solid foundation for the AI to generate accurate ratings.</li>
                          <li><strong>AI Chatbot</strong>: Powered by Claude 3, our chatbot had access to each restaurant's data and could suggest more sustainable options, helping them improve their rating and track progress over time.</li>
                          <li><strong>User Frontend</strong>: The user interface allowed signed-in users to access a list of restaurants in their area, complete with a leaderboard showcasing the most sustainable eateries.</li>
                          <li><strong>Restaurant Participation</strong>: We interviewed several local restaurants to gather test data for the website and received positive feedback from many of them, with interest in continuing the project.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">What I Learned:</h3>
                        <ol className="list-decimal list-inside">
                          <li>AI fundamentals and their application in real-world scenarios.</li>
                          <li>How to build and deploy a full-stack application using React and TypeScript.</li>
                          <li>Hands-on experience with AI-driven sustainability evaluation and chatbot development.</li>
                          <li>How to engage with and gather feedback from local businesses to refine project features.</li>
                        </ol>
                        <h3 className="text-2xl font-bold">Learn More:</h3>
                          <p>To see our code, check out our <a className="text-blue-500 underline" href="https://github.com/PelleKrab/my_first_blockchain">Repo</a>. Thank you for reading!</p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default RustBlockchainProject;
