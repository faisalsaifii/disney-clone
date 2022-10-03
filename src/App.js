import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
