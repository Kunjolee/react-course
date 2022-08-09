import React, { Component } from "react";

function Pokemon({ myData }) {
  return (
    <figure>
      <img src={myData.image} alt={myData.name} />
      <figcaption>{myData.name}</figcaption>
    </figure>
  );
}

export default class AjaxApis extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        json.results.forEach((el) => {
          fetch(el.url)
            .then((pokeRes) =>
              pokeRes.ok ? pokeRes.json() : Promise.reject(pokeRes)
            )
            .then((pokeJson) => {
              const pokemon = {
                id: pokeJson.id,
                name: pokeJson.name,
                image: pokeJson.sprites.front_default,
              };

              const SpreadPokemons = [...this.state.pokemons, pokemon];

              this.setState(() => {
                return {
                  pokemons: SpreadPokemons,
                };
              });
            });
        });
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h2>Peticiones Asíncronas en componentes de Clase</h2>
        <article>
          {this.state.pokemons.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            this.state.pokemons.map((pokemon) => (
              <Pokemon key={pokemon.id} myData={pokemon} />
            ))
          )}
        </article>
      </div>
    );
  }
}
