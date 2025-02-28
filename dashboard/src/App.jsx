import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Donors from './pages/Donors';
import Hospitals from './pages/Hospitals';
import BloodInventory from './pages/BloodInventory';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/donors" element={<Donors />} />
              <Route path="/hospitals" element={<Hospitals />} />
              <Route path="/blood-inventory" element={<BloodInventory />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;