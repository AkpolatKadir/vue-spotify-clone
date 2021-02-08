import axios from "axios";
const state = () => ({
  playlists: [],
  tracks: {},
});

const getters = {
  getAlbumDetailById: (state) => (albumId) => {
    return (
      state.playlists.find(
        (playlist) => playlist.strRateYourMusicID === albumId
      ) || {}
    );
  },
  getTracksByAlbumId: (state) => (albumId) => {
    return state.tracks[albumId];
  },
};

const actions = {
  async fetchPlaylists({ commit }, band) {
    const res = await axios.get("/searchalbum.php", { params: { s: band } });
    const playlists = res.data.album;
    commit("setPlaylists", playlists);
  },
  async fetchTracksOfAlbum({ commit }, albumId) {
    const res = await axios.get("/track.php", {
      params: { m: albumId },
    });
    const tracks = res.data.track;
    commit("setAlbumTracks", { albumId, tracks });
  },
};

const mutations = {
  setPlaylists(state, playlists) {
    state.playlists = playlists;
  },
  setAlbumTracks(state, { albumId, tracks }) {
    state.tracks = {
      [albumId]: tracks,
    };
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
