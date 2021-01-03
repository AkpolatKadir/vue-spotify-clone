<template>
  <div class="playlist">
    <h1 class="playlist-header">Playlists</h1>

    <div class="actionButtonList">
      <button class="createPlaylistButton">
        <i class="far fa-plus-square fa-2x" />
        <span class="createPlaylistButton-text">Create Playlist</span>
      </button>

      <NavigationButton
        :nav-item="{ text: 'Liked Songs', iconName: 'far fa-heart fa-2x' }"
      />
    </div>

    <hr />

    <ul class="userPlaylists">
      <li
        class="userPlaylists-item"
        v-for="(playlist, index) in playlists"
        :key="index"
      >
        <a>
          <span @click="navigateToAlbum(playlist.strRateYourMusicID)">{{
            playlist.strAlbum
          }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import NavigationButton from "./NavigationButton.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "TheNavBarPlaylist",
  components: { NavigationButton },
  computed: mapState({
    playlists: (state) => state.album.playlists,
  }),
  methods: {
    navigateToAlbum(albumId) {
      this.$router.push(`/album/${albumId}`);
    },
    ...mapActions(["fetchPlaylists"]),
  },
  created() {
    const band = "queen"; // TODO: Make this variable dynamic.
    this.$store.dispatch("fetchPlaylists", band);
  },
};
</script>

<style lang="scss">
.playlist {
  height: 500px;

  &-header {
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: #b3b3b3;
    margin-bottom: 12px;
  }
}

.actionButtonList {
  display: grid;
  grid-auto-rows: 42px;
}

.createPlaylistButton {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #b3b3ae;
  border: none;
  background: transparent;
  padding: 0;
  font: unset;

  transition: color 0.2s linear;

  &:hover {
    color: white;
  }

  i {
    margin-right: 10px;
  }
  &-text {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: normal;
    text-transform: none;
  }
}

hr {
  margin-right: 24px;
  background-color: #282828;
  border: none;
  height: 1px;
}

.userPlaylists {
  display: grid;
  grid-auto-rows: 32px;
  height: 100%;
  overflow-y: auto;
  align-items: center;
  color: #b3b3b3;
  font-size: 14px;
  font-weight: 400;

  &-item {
    cursor: pointer;

    &:hover {
      color: white;
    }
  }
}
</style>
