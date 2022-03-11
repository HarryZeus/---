import CatHash from './compents/CatHash';
import FileUpload from './compents/FileUpload';
import ShowStatus from './compents/ShowStatus';
import Home from './compents/Home';
import { Link, Route, Routes} from 'react-router-dom';
import React from 'react';
import './index.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>IPFS Storage</h1>
      </header>
      <div>
        <nav className='sideBar'>
          <ul>
            <li><Link className="active" to="/home">Home</Link></li>
            <li><Link to="/uploadfiles">Uploadfiles</Link></li>
            <li><Link to="/catcontents">Cat</Link></li>
            <li><Link to="/status">Connect Status</Link></li>
          </ul>
        </nav>
      </div>
      <div className='show_contents'>
          <Routes>
            <Route path="/" component={App}>
                <Route path="/home" element={<Home />}/>
                <Route path="/uploadfiles" element={<FileUpload />}/>
                <Route path="/catcontents" element={<CatHash />}/>
                <Route path="/status" element={<ShowStatus />}/>
            </Route>
          </Routes>
      </div>

      <footer>
        harry's work
      </footer>

    </div>
  );
}

export default App;
