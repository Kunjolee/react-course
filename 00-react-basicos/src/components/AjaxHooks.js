import React, { useState, useEffect } from "react";

function Pokemon({ image, name }) {
  return (
    <figure>
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default function AjaxHooks() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const pokeRequest = async (url) => {
      try {
        let res = await fetch(url);
        let json = await res.json();

        json.results.forEach(async (el) => {
          let res = await fetch(el.url);
          let json = await res.json();

          const individualPokemon = {
            id: json.id,
            name: json.name,
            image: json.sprites.front_default,
          };

          setPokemons((currentPokemons) => [
            ...currentPokemons,
            individualPokemon,
          ]);
        });
      } catch (err) {
        console.log("Ocurrio un error en la peticion", err);
      }
    };

    pokeRequest("https://pokeapi.co/api/v2/pokemon");
  }, []);

  return (
    <div>
      <h2>Peticiones Asíncronas en Hooks</h2>
      {pokemons.length === 0 ? (
        <h3>Cargando...</h3>
      ) : (
        pokemons.map((poke) => {
          return <Pokemon key={poke.id} name={poke.name} image={poke.image} />;
        })
      )}
    </div>
  );
}
