import { Home } from './pages/Home';
import { Archive } from './pages/Archive';
import { Starred } from './pages/Starred';
import { Bin } from './pages/Bin';
import {Routes,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/archive' element={<Archive/>}/>
      <Route path='/starred' element={<Starred/>}/>
      <Route path='/bin' element={<Bin/>}/>
    </Routes>
  )
}

export default App;
