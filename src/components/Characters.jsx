import React, { useState, useEffect, useReducer } from 'react';
import Card from './Card';

const initialState = {
  favorites: []
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const API ='https://rickandmortyapi.com/api/character/';

  useEffect(()=>{
    fetch(API)
    .then(response => response.json())
    .then(data => setCharacters(data.results))
  }, []);

  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  console.log(favorites);

  return (
    <div className='Characters'>

      {favorites.favorites.map(favorite => (
        <li key={favorite.id}>
          {favorite.name}
        </li>
      ))}

      {characters.map(character => (
        <div key={character.id} className='card'>
          <h3>{character.name}</h3>
          <div className='card--body'>
            <img src={character.image} />
            <button type="button" onClick={() => handleClick(character)}>Agregar a Favoritos</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Characters;
