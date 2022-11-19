import logo from './logo.svg';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom'
import SearchList from './SearchList';

function App() {


let navigate = useNavigate();
  return (
    <div className='App'>
    <Routes>
      <Route path="/search" element={<SearchList></SearchList>}></Route>
      <Route path="/" element={ <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          onClick={()=>{ navigate('/search') }}
        >
          검색하고싶으면 누르셈
        </a>
      </header>
    </div>}/>
    </Routes>
    </div>
  );
}

export default App;
