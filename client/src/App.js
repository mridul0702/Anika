import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import TopNav from './components/TopNav';

import './light.css'

import RegisterComplaint from './pages/RegisterComplaint'
function App() {
  return (
    <div className="App">
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/complaint" element={<RegisterComplaint/>} />
    </Routes>
    </div>
  );
}

export default App;
