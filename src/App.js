
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import './style.css';
import { Container } from 'react-bootstrap';
import Home from './pages/Home/Home'
import Galary from './pages/Galary/Galary'

function App() {
  return (

     <BrowserRouter>
    <div className="Apps">
     <Routes>
      <Route path='/' element={<Home />}>
        <Route path='galary' element={<Galary />} />
      <Route path='galary' element={<Galary />} />
      <Route path='galary' element={<Galary />} />
      </Route>
      
   </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
