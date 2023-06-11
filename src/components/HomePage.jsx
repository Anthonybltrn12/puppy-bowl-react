import { useState, useEffect } from "react";
import DescripPage from "./Pupdescription";
import {Link} from 'react-router-dom'
export default function HomePage (){
    const [allPuppies, setAllPuppies ] = useState([])

  useEffect(() => {
    async function fetchPuppyData(){
      try{
        const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players');
        const translatedData = await  response.json();
        // console.log(translatedData.data.players)
        setAllPuppies(translatedData.data.players)
      }catch(error){
        console.error(error)
      }
    }
    fetchPuppyData();
  }, [])

  

    return(
       <> 
       <section id='puppyRoster'>  { 
            allPuppies.length ? allPuppies.map((puppy) =>{
              return(
                  <div className='puppyBox' key={puppy.id}>
                    <img className = 'pup-pics' src={puppy.imageUrl}/>
                    <h3 className='name'>{puppy.name}</h3>
                    {/* <button>Player Bio</button> */}
                    <Link to={`/players/${puppy.id}`}>Puppy Details</Link>
                  </div>
              )
            }) : <div>Loading...</div>
            }
            </section>
         
          
       </> 
        
    )
}