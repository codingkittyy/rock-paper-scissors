import './App.css';
import Home from './pages/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Results from './pages/Results';
import Score from './components/Score';

function App() {
  return (
    <Router>
    <div className="App">
    <Score />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/results' element={<Results />} />
    </Routes>

    <ToastContainer />
    </div>
    </Router>
  );
}

export default App;
