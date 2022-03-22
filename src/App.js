import './App.css';
import { Menu } from './components'
import { Routes, Route } from 'react-router-dom'
import { Bookmarks, Header,Popular, Search, Sections, Today } from './components'

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path='/' element={<Today />}/>
        <Route path='/today' element={<Today />} />
        <Route path='/sections' element={<Sections />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
