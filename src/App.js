import './App.css';
import { Menu } from './components'
import { Routes, Route } from 'react-router-dom'
import { Sections, Today } from './components'

function App() {
  return (
    <div className="App relative">
      <Routes>
        <Route path='/' element={<Today />}/>
        <Route path='/today' element={<Today />} />
        <Route path='/sections' element={<Sections />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
