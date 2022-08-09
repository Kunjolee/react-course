import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import { helpHttp } from "../helpers/helpHttp";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Error404 from "../pages/Error404";
import { SongTable } from "./SongTable";
import { SongPage } from "../pages/SongPage";

const mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (!search) return null;

    const fetchData = async () => {
      const { artist, song } = search;

      const artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      const songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      setBiography(artistRes);
      setLyric(songRes);

      setLoading(false);
    };

    localStorage.setItem("mySongs", JSON.stringify(mySongs));
    fetchData();
  }, [search, mySongs]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  const handleSave = () => {
    alert("Agregando cancion");

    const currentSong = {
      search,
      biography,
      lyric,
    };

    let songs = [...mySongs, currentSong];

    console.log(songs);

    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };
  const handleDelete = (id) => {
    let isDelete = window.confirm(`Desea eliminar la canción ${id}`);

    if (isDelete) {
      const newSong = mySongs.filter((el, i) => id !== i);
      setMySongs(newSong);
      localStorage.setItem("mySongs", JSON.stringify(newSong));
    }
  };

  return (
    <div>
      <Router basename="songs">
        <header className="song-header">
          <h2>Song Search</h2>
          <Link to={"/"}>Home</Link>
        </header>
        {loading && <Loading />}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSave={handleSave}
                  />
                  <SongTable mySongs={mySongs} handleDelete={handleDelete} />
                  {search && !loading && (
                    <SongDetails
                      search={search}
                      lyric={lyric}
                      biography={biography}
                    />
                  )}
                </>
              }
            />
            <Route path="/:id" element={<SongPage mySongs={mySongs} />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </article>
      </Router>
    </div>
  );
};

export default SongSearch;
