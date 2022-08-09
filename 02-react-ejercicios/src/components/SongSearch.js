import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loading from "./Loading";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [biography, setBiography] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;

    const request = async () => {
      const { artist, song } = search;

      const artistUrl = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      const songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log("Artist Res: ", artistRes);
      console.log("Song Res: ", songRes);

      setBiography(artistRes);
      setLyric(songRes);
      setLoading(false);
    };

    request();
  }, [search]);

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        <SongForm handleSearch={handleSearch} />
        {loading && <Loading />}
        {lyric && biography && (
          <SongDetails search={search} lyric={lyric} biography={biography} />
        )}
      </article>
    </div>
  );
};

export default SongSearch;
