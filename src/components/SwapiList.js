import React from 'react';
import Swapi from './Swapi';


const SwapiList = ({ swPeople }) => {
 var swapiComponent = swPeople.map((person, i) =>{
		return <Swapi key={i} id={i} name={person.name}/>;
		
	})

	return(
		<div>
			{swapiComponent}      		
        </div> 
     )
} 


export default SwapiList;