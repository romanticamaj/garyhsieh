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
    "src": "media/overdubbed/Sweet Child of Mine_org 00_00_00-00_00_40.mp3",
    "name": "User Original",
    "soloed": true
  },
  {
    "src": "media/overdubbed/Sweet Child of Mine_eqmatched 00_00_00-00_00_40.mp3",
    "name": "EQ Match by iZoptope RX8"
  },
  {
    "src": "media/overdubbed/Sweet Child of Mine_neutron 00_00_00-00_00_40.mp3",
    "name": "Sculptor by iZoptope Neutron"
  }
]).then(function() {
  //can do stuff with the playlist.
});
