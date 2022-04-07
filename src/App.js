import './App.css';
import { Menu } from './components'
import { Routes, Route } from 'react-router-dom'
import { Bookmarks, SpecialCoverage,  Header, Popular, Search, Sections, Today } from './components'

function App() {
  return (
    <div className="App relative mx-6 mb-28 mt-4 bg-slate-50 dark:bg-black">
      <Header />
      <Routes>
        <Route path='/' element={<Today />}/>
        <Route path='/sections' element={<Sections />} />
        <Route path='/popular' element={<Popular />} />
        <Route path='/bookmarks' element={<Bookmarks />} />
        <Route path='/search' element={<Search />} />
        <Route path='/coverage/:searchTerm' element={<SpecialCoverage />} />
      </Routes>
      <Menu />
    </div>
  );
}

export default App;
