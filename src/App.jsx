import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Topics from './pages/Topics';

function App() {
 

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/article/:id' element={<Article/>} />
            <Route path='/topics' element={<Topics/>} />
        </Routes>
    </Router>
  )

}

export default App 