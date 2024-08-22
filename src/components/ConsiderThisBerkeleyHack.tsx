import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarrySky from './StarrySky';

const ConsiderThisBerkeleyHack: React.FC = () => {
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
                    <h1 className="text-4xl font-bold mb-4">Consider This</h1>
                    <p>Quick trip to the Bay.</p>
                </aside>
                <section className="bg-white text-black px-8 rounded-xl shadow-lg max-w-3xl w-full mb-8">
                    <div className="flex justify-center items-center py-8">
                        <img
                            src="https://camo.githubusercontent.com/e67fe34d68accaf65c2c9d8dc205f207f5104d500c572122dfe82aafccd1dfd5/68747470733a2f2f643131327936393861646975327a2e636c6f756466726f6e742e6e65742f70686f746f732f70726f64756374696f6e2f736f6674776172655f70686f746f732f3030322f3933322f3935302f64617461732f6f726967696e616c2e706e67"
                            alt="Centered Image"
                            className="max-w-full h-auto"
                        />
                    </div>
                    <header className="mb-4">
                        <h2 className="text-3xl font-bold">Project Overview</h2>
                    </header>
                    <article className="space-y-4">
                        <p>The goal of this hackathon was to use AI for educational technology and positive societal impact. Hosted at the world’s largest AI hackathon at UC Berkeley and sponsored by Cal Hacks, Berkeley SkyDeck, OpenAI, and Hume AI, our team of four—Juan Lucas Umali, Suyash Nagumalli, and myself—created "Consider This," an ed-tech platform designed to foster healthy, empathetic discussions with AI agents. Our platform emulates a Socratic Seminar environment for K-12 students, offering a tool where even quiet and shy students can engage in rich, human-like dialogue with AI, helping them think critically and escape echo chambers. This was my first time working with this team, and our diverse backgrounds and ideas culminated in a truly unique project.</p>
                        <h3 className="text-2xl font-bold">Project Objectives:</h3>
                        <ul className="list-disc list-inside">
                            <li>Leverage AI to enhance educational experiences.</li>
                            <li>Create a multi-agent AI platform to foster critical thinking.</li>
                            <li>Develop a tool that encourages positive societal impact through education.</li>
                            <li>Provide an inclusive environment where all students can participate.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">Key Features:</h3>
                        <ul className="list-disc list-inside">
                            <li><strong>Multi-Agent Experience:</strong> We leveraged two distinct Empathetic Virtual Intelligences (EVIs) to create a multi-agent experience where AI agents were designed with unique conversational styles, inflections, personalities, and backgrounds. This diversity allowed for rich, nuanced discussions.</li>
                            <li><strong>Socratic Seminar Environment:</strong> Our platform was designed to replicate the Socratic Seminar format, encouraging critical thinking and empathetic engagement. Even students who might not typically speak up in class could use our tool to explore divergent perspectives.</li>
                            <li><strong>AI-Driven Dialogue:</strong> Powered by Hume AI and OpenAI, the platform enabled AI agents to engage in meaningful, empathetic conversations with students, offering insights and promoting deeper understanding of various topics.</li>
                            <li><strong>Customizable Agent Profiles:</strong> Educators could tailor the AI agents to better fit the needs of their students, adjusting factors like personality and conversational style to match classroom dynamics.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">What I Learned:</h3>
                        <ol className="list-decimal list-inside">
                            <li>The importance of empathy in AI-driven education.</li>
                            <li>How to create a multi-agent AI system that engages users in a meaningful way.</li>
                            <li>The challenges and rewards of rapid, cross-disciplinary collaboration.</li>
                            <li>How AI can be leveraged to create inclusive learning environments that promote critical thinking.</li>
                        </ol>
                        <h3 className="text-2xl font-bold">Learn More:</h3>
                        <p>To see our code, check out our teams <a className="text-blue-500 underline" href="https://github.com/twolucasumali/consider-this">Repo</a>. Thank you for reading!</p>
                        <br/>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default ConsiderThisBerkeleyHack;
