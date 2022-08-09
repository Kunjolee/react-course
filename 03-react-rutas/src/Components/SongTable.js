import SongTableRow from "./SongTableRow";

export const SongTable = ({ mySongs, handleDelete }) => {
  return (
    <div>
      <h3>Mis canciones favoritas</h3>
      <table>
        <thead>
          <tr>
            <th colSpan="2">Artistas</th>
            <th>Cancion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mySongs.length > 0 ? (
            mySongs.map((el, i) => (
              <SongTableRow
                key={i}
                el={el}
                id={i}
                handleDelete={handleDelete}
              />
            ))
          ) : (
            <tr>
              <td colSpan="4">No hay canciones favoritas</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
