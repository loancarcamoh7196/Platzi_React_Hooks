import { useState, useEffect } from 'react';
import Card from './Card';


const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const API ='https://rickandmortyapi.com/api/character/';

  useEffect(()=>{
    fetch(API)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, [])
  return (
    <div className='Characters'>
      {characters.map(character => (
        <Card data={character} />
      ))}
    </div>
  )
}

export default Characters;
