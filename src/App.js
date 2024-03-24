
import './App.css';
import Restaurant from './components/Restaurant/restaurant';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cooking from './components/Cooking/cooking';

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Restaurant />} />
        <Route path="/cooking" element={<Cooking />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
