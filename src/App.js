import './App.css';
import Landing from './pages/Landing';
import LandingBody from './components/LandingBody'
import ContactUs from './components/ContactUs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}>
          <Route index element={<LandingBody/>}/>
          <Route path='contact-us' element={<ContactUs/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
