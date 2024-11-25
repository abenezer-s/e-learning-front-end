import { useState } from 'react';
import Home from "./components/Home";
import Auth from "./pages/Auth"
import styles from "./App.module.css"
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
    
  );
}

export default App;
