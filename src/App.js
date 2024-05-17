// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import PokemonList from './PokemonList';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      {token ? (
        <PokemonList token={token} />
      ) : (
        <Login setToken={setToken} />
      )}
    </div>
  );
}

export default App;
