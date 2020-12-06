<template>
  <div>
    <h1 class="playlistHeader">Playlists</h1>

    <button class="createPlaylistButton">
      <img class="createPlaylistButton-icon" />
      <span class="createPlaylistButton-text">Create Playlist</span>
    </button>

    <NavigationButton
      :nav-item="{ text: 'Liked Songs', iconModifier: 'heart' }"
    />
  </div>
</template>

<script>
import NavigationButton from "./NavigationButton.vue";

export default {
  name: "NavBarPlayList",
  components: { NavigationButton },
  data: function() {
    return { playlists: [] };
  },
};
</script>

<style lang="scss">
.playlistHeader {
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: #b3b3b3;
  margin-bottom: 12px;
}
.createPlaylistButton {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #b3b3ae;
  border: none;
  background: transparent;
  padding: 0;

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
</style>
