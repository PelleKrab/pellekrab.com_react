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
                    <h1 className="text-4xl font-bold mb-4">Rust Blockchain</h1>
                    <p>I fought the borrow checker and won. My first Rust project</p>
                </aside>
                <section className="bg-white text-black p-8 rounded-xl shadow-lg max-w-3xl w-full mb-8">
                    <header className="mb-4">
                        <h2 className="text-3xl font-bold">Project Overview</h2>
                    </header>
                    <article className="space-y-4">
                        <p>This project placed a greater emphasis on learning compared to my earlier projects, which were more about solving specific problems. Having completed rustlings and other work in Rust, this endeavor was the first time the language began to click for me, allowing me to apply it effectively. Additionally, I deepened my understanding of blockchain technology and how it employs cryptography to establish trustless systems. Consequently, Rust has become my preferred language, and I am excited to build more with it in the future.</p>
                        <h3 className="text-2xl font-bold">Project Objectives:</h3>
                        <ul className="list-disc list-inside">
                            <li>Explore the fundamentals of blockchain technology.</li>
                            <li>Implement a basic blockchain system using Rust programming.</li>
                            <li>Facilitate educational purposes and hands-on learning with blockchain.</li>
                            <li>Demonstrate transaction processing, block mining, and chain validation.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">Key Features:</h3>
                        <ul className="list-disc list-inside">
                            <li><b>Blockchain Core:</b> The core logic for maintaining a secure and immutable ledger.</li>
                            <li><b>Transactions:</b> Allows creating and validating transactions within the blockchain.</li>
                            <li><b>Block Mining:</b> Multithreaded mining process for blocks containing transaction data.</li>
                            <li><b>Chain Validation:</b> Techniques to ensure the integrity of the blockchain through validation of chains and blocks.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">What I Learned:</h3>
                        <ol className="list-decimal list-inside">
                            <li>Blockchain fundamentals and their implementation.</li>
                            <li>How to build complex projects in Rust.</li>
                            <li>Hands-on experience with transaction processing and block mining.</li>
                            <li>How to deploy and optimize multithreaded solutions.</li>
                        </ol>
                        <h3 className="text-2xl font-bold">Learn More:</h3>
                        <p>For more information about this blockchain project, please visit my <a className="text-blue-500 underline" href="https://github.com/PelleKrab/my_first_blockchain">GitHub page</a>. Thank you for your interest!</p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default RustBlockchainProject;
