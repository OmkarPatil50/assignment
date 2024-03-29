import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/organization' element={<Home />} />
        <Route path='/assets' element={<Home />} />
        <Route path='/trade' element={<Home />} />
        <Route path='/history' element={<Home />} />
        <Route path='/wallet' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
