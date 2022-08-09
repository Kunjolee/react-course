import React from "react";
import PropTypes from "prop-types";

export default function Propiedades(props) {
  return (
    <div>
      <h2>{props.myPropDefault}</h2>
      <ul>
        <li>{props.myString}</li>
        <li>{props.myNumber}</li>
        <li>{props.myBoolean ? "True" : "false"}</li>
        <li>{props.myArray.join(",")}</li>
        <li>{`${props.myObject.name} - ${props.myObject.email}`}</li>
        <li>{props.myArray.map(props.myFunction).reverse().join(",")}</li>
        <li>{props.mySecondFunction()}</li>
        <li>{props.myReactElement}</li>
        <li>{props.myReactComponent}</li>
      </ul>
    </div>
  );
}

Propiedades.defaultProps = {
  myPropDefault: "Esta es mi propiedad por default",
};

Propiedades.propTypes = {
  myString: PropTypes.string,
  myNumber: PropTypes.number.isRequired,
};
/*Mas informacion de las propiedades: https://jonmircha.com/react#propiedades */

/*
 PropTypes: Definir que tipo de datos tendran las props y tambien definir si son requeridas o no
 comando para instalar la dependencia: npm i -S prop-types
 se puede 
*/

/* Las propiedades se pasan del componente padre al hijo de forma unidireccional, le puedes poner el nombre que quieras. En el articulo de jon te dice los conceptos basicos y los valores que las propiedades aceptan */

/* Propiedades por defecto: El componente tiene un objeto llamado defaultProps y dentro de ese objeto puedes crear las propiedades que quieras.

Las propiedades por defecto que creaste las puedes utilizar sin necesidad de que un elemento padre le pase la propiedad al hijo */
