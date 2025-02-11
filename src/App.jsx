import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

import HomePage from './components/Home.jsx'
import PuppyDetails from './components/PuppyDetails.jsx'

const App = () => {
  const [allPuppies, setAllPuppies] = useState([]);

  useEffect (() => {
    const getPuppies = async() => {
      const response = await fetch ('https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-ft/players');
      const jsonObj = await response.json();
      setAllPuppies(jsonObj.data.players);
    }
    getPuppies();
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage allPuppies = {allPuppies} />} />
        <Route path='/details/:id' element={<PuppyDetails allPuppies = {allPuppies} />} />
      </Routes>
    </>
  )
}

export default App
