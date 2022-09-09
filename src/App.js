
import './App.css';
import Home from './Home';

import {Route, Routes} from 'react-router-dom'
import School from './School';
function App() {
  return (
    <div className="App container">
     <Routes>
     <Route path='/' element={<Home />}/>
     <Route path='/school' element={<School />}/>
     </Routes>
    </div>
  );
}

export default App;
