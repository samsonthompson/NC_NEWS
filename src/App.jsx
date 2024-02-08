import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import NavBar from './Components/NavBar';

function App() {

  return (
    <Router>
      <div> 
        <NavBar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/article/:id' element={<Article/>} />
        </Routes>
        </div>
    </Router>
  )

}

export default App 