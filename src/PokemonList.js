// src/PokemonList.js
import React, { useEffect, useState } from 'react';

function PokemonList({ token }) {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('http://localhost:3001/api/pokemons', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        setPokemons(data.data);
      } else {
        alert(data.message);
      }
    };

    fetchPokemons();
  }, [token]);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.id}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonList;
