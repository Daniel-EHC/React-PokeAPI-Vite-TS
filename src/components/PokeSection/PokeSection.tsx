import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import './PokeSection.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



type PokeSectionProps = {
  url: string;
}

type PokemonStat = {
  base_stat: number;
  stat: {
    name: string;
  };
}

type PokemonAbility = {
  ability: {
    name: string;
  };
}

type PokemonHeldItem = {
  item: {
    name: string;
  };
}

type PokemonType = {
  type: {
    name: string;
  };
}

type PokemonData = {
  name: string;
  sprites: Record<string, string>;
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  held_items: PokemonHeldItem[];
  species: {
    name: string
  };
  types: PokemonType[];
  weight: number;
  base_experience: number;

}



const PokeSection: React.FC<PokeSectionProps> = ({ url }) => {


  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  useEffect(() => {
    axios.get<PokemonData>(url).then(response => setPokemonData(response.data));
  }, [url]);

  if (!pokemonData) return <div><h1>Select a Pokemon to see its PokeInfo</h1></div>;



  const items = Object.values(pokemonData.sprites)
    .filter(value => value)
    .map((value, index) => (
      <div><img key={index} src={value} alt={`Sprite ${index} not found`} /></div>
    ));


  return (
    <section >
      <div className='main-container-section'>

        <div className='pokemon-profile'>
          <h2>{pokemonData.name.toUpperCase()}</h2>
          <img  src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </div>
        <h3>Base Experience</h3>
        <p>{pokemonData.base_experience}</p>

        <h3>Stats</h3>
        <ul>
          {pokemonData.stats.map(stat => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>

        <h3>Abilities:</h3>
        <ul>
          {pokemonData.abilities.map(ability => (
            <li key={ability.ability.name}>{ability.ability.name}</li>
          ))}
        </ul>

        <h3>Held Items:</h3>
        <ul>
          {pokemonData.held_items.map(item => (
            <li key={item.item.name}>{item.item.name}</li>
          ))}
        </ul>

        <h3>Species</h3>
        <p>{pokemonData.species.name}</p>

        <h3>Type</h3><ul>{pokemonData.types.map(type =>
          <li key={type.type.name}>{type.type.name}</li>)}</ul>

        <h3>Weight</h3>
        <p>{pokemonData.weight}</p>




      </div>

      <div className='sprite-carousel'>
        <h3>Sprites</h3>
        <Carousel   
        dynamicHeight={true} 
        autoPlay={true} 
        showStatus={false}
        showArrows={false}
        stopOnHover={false}
        transitionTime={100}
        infiniteLoop={true}
        >
          {items}
        </Carousel>
      </div>


    </section>);


};

export default PokeSection;