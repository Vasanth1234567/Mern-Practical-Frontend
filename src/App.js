import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import FileUploadComponent from './components/FileUploadComponent/FileUploadComponent';
import SongGalleryComponent from './components/SongGalleryComponent/SongGalleryComponent';

function App() {
  return (
    <Router>
      <div className='container'>
        <h1>Music Player App</h1>

        <nav className='nav-menu'>
          <Link to='/'>Home</Link>
          <Link to='/admin/upload'>Add Songs</Link>
        </nav>
        <Routes>
          <Route exact path='/' element={<SongGalleryComponent />} />
          <Route path='/admin/upload' element={<FileUploadComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;