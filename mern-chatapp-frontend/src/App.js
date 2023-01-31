import './App.css';
import Home from "./components/home"
import Chat from "./components/chat"
import Login from "./components/login"
import Signup from "./components/signup"

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
