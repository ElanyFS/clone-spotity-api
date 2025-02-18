import { artistArray } from "../../database/artists.js";
import { songsArray } from "../../database/songs.js";

import { db } from "./conect.js";

const newArtistArray = artistArray.map((item) => {
  const newArtistObj = { ...item };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongstArray = songsArray.map((item) => {
  const newSongstObj = { ...item };
  delete newSongstObj.id;

  return newSongstObj;
});

// const responseArtist = await db.collection('artists').insertMany(newArtistArray);

// const responseSongs = await db.collection('songs').insertMany(newSongstArray);

// console.log(responseArtist);

// console.log(responseSongs);