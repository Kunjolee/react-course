import { useNavigate } from "react-router-dom";

const SongTableRow = ({ id, el, handleDelete }) => {
  // console.log(el);

  const navigate = useNavigate();

  const { search, biography } = el;

  const avatarStyles = {
    width: "auto",
    height: "40px",
  };

  let avatar = biography.artists[0].strArtistThumb;

  return (
    <tr>
      <td>
        <img style={avatarStyles} src={avatar} alt={search.artist} />
      </td>
      <td>{search.artist}</td>
      <td>{search.song}</td>
      <td>
        <button onClick={() => navigate(`/${id}`)}>Ver</button>
        <button onClick={() => handleDelete(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default SongTableRow;
