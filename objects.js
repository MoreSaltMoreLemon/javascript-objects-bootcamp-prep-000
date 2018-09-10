let playlist = {
  'Alicia Keys': "rock me", Beck: "stupid kinda love"
};

function updatePlayList(object, artist, song) {
  object[artist] = song;
  return object;
}

function removeFromPlaylist(object, artist) {
  delete object[artist];
  return object;
}