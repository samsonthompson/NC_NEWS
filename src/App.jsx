import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import NavBar from './Components/NavBar';
import { useState } from 'react';
import UserContext from "./Contexts/StaticUserContext"
import useFetchTopics from '../UseFetchTopics';
import Topics from './pages/Topics';


function App() {

  const [loggedInUser, setLoggedInUser] = useState('grumpy19')
  const { topics, isPending, error } = useFetchTopics()
  
  return (
    <Router>
      <UserContext.Provider value={loggedInUser}>
      <div> 
        <NavBar topics={topics}/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/article/:id' element={<Article/>} />
            <Route path='/topics/:topic' element={<Topics/>} />
        </Routes>
        </div>
        </UserContext.Provider>
    </Router>
  )

}

export default App 