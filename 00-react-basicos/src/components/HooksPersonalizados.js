import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      <h2>Hooks - Personalizados </h2>
      <h3>Pendiente {JSON.stringify(isPending)}</h3>
      <h3>
        <mark>{JSON.stringify(error)}</mark>
      </h3>
      <h3>{data ? "Si trajo data" : "No trajo data"}</h3>
    </div>
  );
}
