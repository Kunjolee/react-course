import React from "react";
import { useParams } from "react-router-dom";

const Users = () => {
  const { username } = useParams();
  return (
    <div>
      <h3>Usuarios</h3>
      <p>
        Perfil del usuario <b>{username}</b>
      </p>
    </div>
  );
};

export default Users;
