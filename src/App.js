import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import AddRepairRequest from './repair_requests/AddRepairRequest';
import EditRepairRequest from './repair_requests/EditRepairRequest';
import ViewRepairRequest from './repair_requests/ViewRepairRequest';
import ViewRepairRequestsArchive from './repair_requests_archieved/ViewRepairRequestsArchive';
import ViewDetailsRepairRequestArchive from './repair_requests_archieved/ViewDetailsRepairRequestArchive';
import HandBook from './handbook/HandBook';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-request" element={<AddRepairRequest />} />
          <Route exact path="/edit-repair-request/:id" element={<EditRepairRequest />} />
          <Route exact path="/view-repair-request/:id" element={<ViewRepairRequest />} />
          <Route exact path="/archive" element={<ViewRepairRequestsArchive />} />
          <Route exact path="/view-archive-repair-request/:id" element={<ViewDetailsRepairRequestArchive />} />
          <Route exact path="/handbook" element={<HandBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
