import React, { useState } from 'react';
import './PokeHeader.css'

type PokeHeaderProps = {
  pokemonList: {
    name: string;
    url: string;
  }[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: () => void;
};


const PokeHeader: React.FC<PokeHeaderProps> = ({ pokemonList, searchTerm, setSearchTerm, handleSearch }) => {
  return (
    <header className='container'>
      <div className='container-search'>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <br/>
        

        <button className='searchbutton' onClick={handleSearch}>Search</button>
      </div>
      
       
    
      <div className='container-counter'>
        <p>Filtered results count <br />{pokemonList.length}</p>
      </div>
    </header>
  );
};

export default PokeHeader;
