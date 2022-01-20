
import './App.css';
import {BrowserRouter as Router,Route,Routes,}from 'react-router-dom'
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <div className="App">
        <h1>jwt token</h1>
 <Router>

     <Routes>
    
     <Route  path="/" element={<Home/>}/>
     <Route path="/login" element={<Login/>}/>
     </Routes>
    
   
       </Router>
    </div>
  );
}

export default App;
