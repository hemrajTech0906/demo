import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Registration from './Registration'
// import Registration from './Registration'
import About from './About'; 
import Registration from '../src/Regsitration';

const App: React.FC = () => {
  return (
 

 <Router>
      <nav>
        <ul>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </Router> 





    
  );
};

export default App;
