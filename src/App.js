import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Faq from './Faq';
import Privacy from './Privacy';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/faq" element={<Faq />} exact />
        <Route path="/privacy" element={<Privacy />} exact />
      </Routes>
    </>
  );
}

export default App;