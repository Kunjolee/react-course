import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetails = ({ search, lyric, biography }) => {
  return (
    <>
      {lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`No pudimos encontrar la cancion ${search.song}`}
          color={"red"}
        />
      ) : (
        <SongLyric lyrics={lyric.lyrics} title={search.song} />
      )}

      {!biography.artists ? (
        <Message
          msg={`No hemos podido encontrar al artista ${search.artist} `}
          color={"red"}
        />
      ) : (
        <SongArtist artist={biography.artists[0]} />
      )}
    </>
  );
};

export default SongDetails;
