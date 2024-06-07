import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarrySky from './StarrySky';

const FRCJavaFramework: React.FC = () => {
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
                    <h1 className="text-4xl font-bold mb-4">FRC Java Framework</h1>
                    <p>A brief overview of our FRC Java programming framework for robotics competitions.</p>
                </aside>
                <section className="bg-white text-black p-8 rounded-xl shadow-lg max-w-3xl w-full">
                    <header className="mb-4">
                        <h2 className="text-3xl font-bold">Introduction to FRC Java Framework</h2>
                    </header>
                    <article className="space-y-4">
                        <p>The FRC (FIRST Robotics Competition) Java Framework is a powerful tool for programming robots to compete in various challenges. It provides developers with a structured environment to create, test, and deploy code that controls robot movements, sensors, and automated tasks.</p>
                        <h3 className="text-2xl font-bold">Objectives:</h3>
                        <ul className="list-disc list-inside">
                            <li>Streamline the development of robot code.</li>
                            <li>Reduce barrier to entry for new FRC programmers.</li>
                            <li>Reduce bugs and increase efficiency during development.</li>
                            <li>Create a command-based framework and increase modularity.</li>
                            <li>Increase accuracy and decrease wait time with a PID.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">Key Features:</h3>
                        <ul className="list-disc list-inside">
                            <li><b>Integration with WPILib:</b> WPILib is a library specifically designed for FRC robot programming, offering a range of functions to control motors, sensors, and communication.</li>
                            <li><b>Teleop Mode XML Config:</b> Develop code for operator-controlled robots. This can be simplified into different commands that allow for a more intuitive coding experience.</li>
                            <li><b>Autonomous Mode XML Config:</b> Develop code for autonomous modes to perform complex tasks by using sensors to guide the robot's actions.</li>
                            <li><b>Robot XML Master Constant File:</b> XML file holds all constants for the robot, ie. motor port numbers, PID constants, hardware settings, limit switch values, and other constants. Allows for changing constant values without recompiling code.</li>
                            <li><b>Sensor Integration:</b> Easily interface with various sensors such as encoders, gyros, and cameras to enhance robot capabilities.</li>
                        </ul>
                        <h3 className="text-2xl font-bold">What I Learned:</h3>
                        <ol className="list-decimal list-inside">
                            <li>Leadership development</li>
                            <li>Version Control</li>
                            <li>Complex Java project / creating internal tooling</li>
                            <li>Project Management</li>
                        </ol>
                        <h3 className="text-2xl font-bold">Learn More:</h3>
                        <p>If you want to learn more about our framework or want to use it for your FRC robot, please use the provided link to check out our <a className="text-blue-500 underline" href="https://github.com/3648TJSpartans/Framework/tree/master">GitHub</a>. Thanks!</p>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default FRCJavaFramework;
