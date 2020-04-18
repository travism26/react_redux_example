import { combineReducers } from 'redux';

// Creating a static list of songs mean you can load this from a DB or what not
// just used as an example.
const songsReducer = () => {
  return [
    { title: "Nothing else matters", duration: "5:55" },
    { title: "2x4", duration: "4:11" },
    { title: "Have You Ever Seen the Rain", duration: "0:11" },
    { title: "Lodi", duration: "1:03" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});