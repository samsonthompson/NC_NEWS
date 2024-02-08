import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import NavBar from './Components/NavBar';
import { useState } from 'react';
import UserContext from "./Contexts/StaticUserContext"


function App() {

  const [loggedInUser, setLoggedInUser] = useState('grumpy19')

  return (
    <Router>
      <UserContext.Provider value={loggedInUser}>
      <div> 
        <NavBar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/article/:id' element={<Article/>} />
        </Routes>
        </div>
        </UserContext.Provider>
    </Router>
  )

}

export default App 