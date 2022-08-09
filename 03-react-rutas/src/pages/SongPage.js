import React from "react";
import { useParams } from "react-router-dom";
import SongDetails from "../Components/SongDetails";

export const SongPage = ({ mySongs }) => {
  let { id } = useParams();
  const currentSong = mySongs[id];

  const { biography, lyric, search } = currentSong;
  return <SongDetails search={search} lyric={lyric} biography={biography} />;
};
