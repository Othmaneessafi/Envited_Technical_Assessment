import Homepage from './containers/Homepage'
import Create from './containers/Create'
import Event from './containers/Event'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Homepage />}></Route>
          <Route path="/create" element={  <Create />}></Route>
          <Route path="/event" element={ <Event />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
