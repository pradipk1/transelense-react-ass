
import './App.css';
import Business from './components/Business/Business';
import { Routes, Route } from 'react-router-dom'; 
import Owner from './components/Owner/Owner';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Business />}/>
        <Route path='/owner-details' element={<Owner />}/>
      </Routes>
    </div>
  );
}

export default App;
