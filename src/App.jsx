import { useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import './components/HomePage'
import './components/Pupdescription'
import DescripPage from './components/Pupdescription';
import HomePage from './components/HomePage';


function App() {
  let [searchBox, setSearchBox] = useState('')
  const [allPuppies, setAllPuppies ] = useState([])
  const [FilteredPuppy, setFilteredPuppy] = useState([]);
 
    
    let filteredPuppy = allPuppies.filter((singlepup) => {
      if(singlepup.name.includes(searchBox)){
        return singlepup}
  })
  return (
    <>
      <div className='body'></div>
      <h1>Puppy Bowl</h1>
      <form id='nav'>
        <label htmlFor='searchBar'>Search by name:</label>
        <input name='searchBar' type='text' value={searchBox} onChange={(event) => {
          console.log(event.target.value) 
          setSearchBox(event.target.value)
        }}></input>
      </form>

      <section id='puppyRoster'>  { 
            filteredPuppy.length ? filteredPuppy.map((singlepup) =>{
              return(
                  <div className='puppyBox' key={singlepup.id}>
                    <img className = 'pup-pics' src={singlepup.imageUrl}/>
                    <h3 className='name'>{singlepup.name}</h3>
                    {/* <button>Player Bio</button> */}
                    {/* <Link to={`/players/${puppy.id}`}>Puppy Details</Link> */}
                  </div>
              )
            }) : <div></div>}
            </section>


    <div className='navBar'>

     <nav> 
        <Link to= '/HomePage'>Home Page</Link>
      </nav>
       <nav>
        <Link to = '/puppyDescription'>Puppy Description Page</Link>
      </nav> 
       
    </div>
    <div>
     <Routes> 
     <Route path='/HomePage' element = {<HomePage /> } />
     <Route path='/players/:id' element = {<DescripPage />} />
    </Routes> 
      
    </div>

     
    </>
  )
}

export default App
