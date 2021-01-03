<template>
  <section class="album">
    <div class="album-details">
      <AlbumCover :src="albumCover" classModifier="shadowBlack" />

      <h1 class="album-detailTexts">
        <span class="album-name"> {{ albumName }} </span>
        <span class="album-meta">
          <ul class="album-artists">
            <span
              class="album-artist"
              v-for="(artist, index) in artists"
              :key="index"
              >{{ artist }}</span
            >
          </ul>
        </span>
      </h1>
    </div>

    <div class="album-content">
      <div class="album-buttons">
        <i class="fas fa-play-circle fa-3x"></i>
        <i class="far fa-heart fa-3x"></i>
        <i class="fas fa-ellipsis-h fa-3x"></i>
      </div>

      <div class="album-musics">
        <hr />
        <div class="album-music">
          <div class="album-musicNumber">1</div>
          <div class="album-musicName">
            <div>Corposeduction</div>
            <div>Marcin</div>
          </div>
          <div class="album-musicDuration">4:26</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AlbumCover from "../components/AlbumCover";
import axios from "axios";

export default {
  name: "AlbumPage",
  components: { AlbumCover },
  data: function () {
    return { albumCover: "", albumName: "", artists: [] };
  },
  methods: {
    async fetchAlbum(albumId) {
      const res = await axios.get(
        `https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=queen&a=${albumId}`
      );
      const albumData = res.data.album[0];
      this.albumCover = albumData.strAlbumCDart;
      this.albumName = albumData.strAlbum;
      this.artists = [albumData.strArtistStripped];
    },
  },
  watch: {
    $route() {
      const albumId = this.$route.params.id;
      this.fetchAlbum(albumId);
    },
  },
  created() {
    const albumId = this.$route.params.id;
    this.fetchAlbum(albumId);
  },
};
</script>

<style scoped lang="scss">
.album {
  display: grid;
  grid-template-rows: 400px auto;
}

.album-details {
  display: flex;
  background-color: #f0e800;
  align-items: flex-end;
  padding: 0 32px 24px;
  & > * {
    margin-right: 24px;
  }
}

.album-detailTexts {
  display: grid;
  row-gap: 10px;
}

.album-name {
  color: white;
  font-weight: 900;
  padding: 0.08em 0px;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: -0.04em;
  text-transform: none;
}
.album-meta {
}
.album-artists {
  display: flex;

  & > * {
    margin-right: 10px;
  }
}

.album-artist {
  font-weight: 700;
  color: white;
  &:hover {
    text-decoration: underline;
  }
}
.album-content {
  background-color: black;
  padding-left: 20px;
  padding-top: 20px;
}

.album-buttons {
  display: flex;
  min-height: 56px;
  & > * {
    margin-right: 18px;
  }

  i {
    width: 56px;
    height: 56px;
  }
}
.album-musics {
  display: grid;
  grid-auto-rows: 56px;
}
.album-music {
  display: flex;
  height: 100%;
  align-items: center;
  color: white;
}
.album-musicNumber {
  margin-right: 18px;
}
.album-musicName {
}
.album-musicDuration {
  margin-left: auto;
}
</style>
