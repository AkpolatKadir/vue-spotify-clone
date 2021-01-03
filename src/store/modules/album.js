import axios from "axios";
const state = () => ({
  playlists: [],
});

const getters = {
  getAlbumDetailById: (state) => (albumId) => {
    console.log(albumId);
    return (
      state.playlists.find(
        (playlist) => playlist.strRateYourMusicID === albumId
      ) || {}
    );
  },
};

const actions = {
  async fetchPlaylists({ commit }, band) {
    const res = await axios.get(
      "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php",
      { params: { s: band } }
    );
    const playlists = res.data.album;
    commit("setPlaylists", playlists);
  },
};

const mutations = {
  setPlaylists(state, playlists) {
    state.playlists = playlists;
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
