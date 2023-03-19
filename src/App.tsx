
import React, { useState } from 'react'
import PokeHeader from './components/PokeHeader/PokeHeader'
import PokeAside from './components/PokeAside/PokeAside'
import PokeFooter from './components/PokeFooter/PokeFooter'
import axios from 'axios';


type Pokemon = {
  name: string;
  url: string;
};

const PokeList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=3000`);
      const results = response.data.results.filter((pokemon: Pokemon) =>
        pokemon.name.includes(searchTerm.toLowerCase())
      );
      setPokemonList(results);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <PokeHeader pokemonList={pokemonList} searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleSearch={handleSearch} />
      <div>
        <PokeAside pokemonList={pokemonList} />
      </div>
      <PokeFooter />

    </div>
  )

};

export default function App() {

  return <PokeList />

}


