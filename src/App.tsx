import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import InfoContainer from './components/InfoContainer';
import Projects from './components/Projects';
import StarrySky from './components/StarrySky';
import SpaceShooterProject from './components/SpaceShooterProject';
import JavaRoboticsProject from './components/JavaRoboticsProject';
import FRCJavaFramework from './components/FRCJavaFramework';
import RustBlockchainProject from './components/RustBlockchainProject';
import ECOBitesBSWHackathon from './components/ECOBitesBSWHackathon';
import ConsiderThisBerkeleyHack from './components/ConsiderThisBerkeleyHack';
import EIP7702TechnicalDive from './components/7702TechnicalDive';

const App: React.FC = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route
        path="/"
        element={
          <div className="relative flex flex-col items-center min-h-screen bg-black text-white font-courier">
            <StarrySky />
            <div className="relative flex flex-col items-center w-full p-4 z-10 min-h-screen justify-center">
              <InfoContainer />
            </div>
            <div className="relative z-10">
              <Projects />
            </div>
          </div>
        }
      />
      <Route path="/EIP7702TechnicalDive" element={<EIP7702TechnicalDive />} />
      <Route path="/ConsiderThisBerkeleyHack" element={<ConsiderThisBerkeleyHack />} />
      <Route path="/ECOBitesBSWHackathon" element={<ECOBitesBSWHackathon />} />
      <Route path="/space-shooter-project" element={<SpaceShooterProject />} />
      <Route path="/java-robotics-project" element={<JavaRoboticsProject />} />
      <Route path="/frc-java-framework" element={<FRCJavaFramework />} />
      <Route path="/rust-blockchain" element={<RustBlockchainProject />} />
    </Routes>
  </Router>
);

export default App;
