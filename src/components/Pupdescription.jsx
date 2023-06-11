import { useState, useEffect } from "react";
import './HomePage'
import { useParams } from "react-router-dom";
import '../App.css'

export default function DescripPage(){
    const [singlePuppy, setSinglePuppy] = useState({})
    const { id } = useParams();
    console.log(id)
    const [allPuppies, setAllPuppies ] = useState([])

    // let filteredPupArr = setSinglePuppy.filter((puppy) => {

    // })
   
    useEffect(() => {
        async function fetchSinglePuppyData(){
          try{
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2304-ftb-et-web-ft/players/${id}`);
            const translatedData = await  response.json();
            console.log(translatedData.data.player)
            console.log(id)
            setSinglePuppy(translatedData.data.player)
          }catch(error){
            console.error(error)
          }
        }
        fetchSinglePuppyData();
      }, [])
    return( 
        <div key = {singlePuppy.id} className="descrip-page">
            <img className = 'singlePup-img' src ={singlePuppy.imageUrl} />
           <div id="info">
            <h2>Name: {singlePuppy.name}</h2>
            <h4>Breed:{singlePuppy.breed}</h4>
            <h4>Specialty:{singlePuppy.status}</h4>
            <h4>{singlePuppy.teamId}</h4>
           </div> 
        </div>

    )
}