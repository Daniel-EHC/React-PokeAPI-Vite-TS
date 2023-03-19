import React, { useState } from "react";
import PokeSection from "../PokeSection/PokeSection";
import './PokeAside.css';

type PokeAsideProps = {
  pokemonList: {
    name: string;
    url: string;
  }[];
};

const PokeAside: React.FC<PokeAsideProps> = ({ pokemonList }) => {
  const [image, setImage] = useState("");

  

  const handlePokeImage = (url: string) => {
    setImage(url);
    console.log(url)
  };
  
  return (
    
    <div className="main-container">
  <aside className="main-container-aside">
  <h1>This is a PokeList</h1>
      <ul className="asideUl">
    
        {pokemonList.map((pokemon) => (
          <li key={pokemon.name} className="asideLi">
            <button className="aside-button" onClick={() => handlePokeImage(pokemon.url)}>{pokemon.name.toUpperCase()}</button>          
          </li>
        ))}
      </ul>
      </aside>
      <PokeSection url={image} />
      
    </div>
    
  );
  
};

export default PokeAside;
