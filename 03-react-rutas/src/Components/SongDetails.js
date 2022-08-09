import React from "react";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "./Message";

const SongDetails = ({ search, lyric, biography }) => {
  if (!lyric || !biography) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: No se encontro la canción <em>"${search.song}"<em/>`}
          color={"#dc3545"}
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}

      {biography.artists ? (
        <SongArtist artist={biography.artists[0]} />
      ) : (
        <Message
          msg={`Error: No se encontro el interprete <em>"${search.artist}"<em/>`}
          color={"#dc3545"}
        />
      )}
    </>
  );
};

export default SongDetails;
