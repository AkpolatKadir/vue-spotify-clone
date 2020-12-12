<template>
  <div class="playlist">
    <h1 class="playlist-header">Playlists</h1>

    <div class="actionButtonList">
      <button class="createPlaylistButton">
        <img class="createPlaylistButton-icon" />
        <span class="createPlaylistButton-text">Create Playlist</span>
      </button>

      <NavigationButton
        :nav-item="{ text: 'Liked Songs', iconModifier: 'heart' }"
      />
    </div>

    <hr />

    <ul class="userPlaylists">
      <li v-for="(playlist, index) in playlists" :key="index">
        <a>
          <span>{{ playlist.name }}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import NavigationButton from "./NavigationButton.vue";
import mockPlaylists from "../assets/mockPlaylists";

export default {
  name: "TheNavBarPlaylist",
  components: { NavigationButton },
  data: function() {
    return { playlists: mockPlaylists };
  },
};
</script>

<style lang="scss">
.playlist {
  height: 100%;

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

  &-icon {
    height: 24px;
    width: 24px;
    margin-right: 10px;
    background-color: #b3b3ae;
    mask: url("../assets/icons/plus.svg");
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
}
</style>
