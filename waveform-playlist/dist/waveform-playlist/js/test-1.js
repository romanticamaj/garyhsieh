var playlist = WaveformPlaylist.init({
  samplesPerPixel: 1000,
  waveHeight: 100,
  container: document.getElementById("playlist"),
  timescale: true,
  state: 'cursor',
  colors: {
    waveOutlineColor: '#E0EFF1'
  },
  controls: {
    show: true,
    width: 200
  },
  zoomLevels: [500, 1000, 3000, 5000],
  exclSolo: true //enabling exclusive solo
});

playlist.load([
  {
    "src": "media/test-1/Manic_rec.mp3",
    "name": "User Original",
    "soloed": true
  },
  {
    "src": "media/test-1/Manic_rec_EQmatch2.mp3",
    "name": "EQ Match by Positive Grid"
  },
  {
    "src": "media/test-1/Manic_rec_rx8.mp3",
    "name": "EQ Match by iZotope RX8"
  },
  {
    "src": "media/test-1/Manic_rec_NeutronEQv0.mp3",
    "name": "Sculptor by Positive Grid"
  },
  {
    "src": "media/test-1/Manic_neutron.mp3",
    "name": "AutoTune by iZotope Neutron 3"
  },
  {
    "src": "media/test-1/Manic_rec_NR_level2.mp3",
    "name": "Noise Reduction by Positive Grid",
    "customClass": 'vocals',
    "waveOutlineColor": '#69e760'
  }
]).then(function() {
  //can do stuff with the playlist.
});
