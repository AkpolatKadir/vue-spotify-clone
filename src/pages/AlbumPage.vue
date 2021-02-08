<template>
  <section class="album">
    <div class="album-details">
      <AlbumCover
        :src="albumDetail.strAlbumCDart"
        classModifier="shadowBlack"
      />

      <h1 class="album-detailTexts">
        <span class="album-name"> {{ albumDetail.strAlbum }} </span>
        <span class="album-meta">
          <ul class="album-artists">
            <span
              class="album-artist"
              v-for="(artist, index) in [albumDetail.strArtistStripped]"
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
        <div
          class="album-music"
          v-for="(track, trackIndex) in tracks"
          :key="trackIndex"
        >
          <div class="album-musicNumber">{{ trackIndex }}</div>
          <div class="album-musicName">
            <div>{{ track.strTrack }}</div>
          </div>
          <div class="album-musicDuration">
            {{ getDurationFormatted(track.intDuration) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AlbumCover from "../components/AlbumCover";
import convertMsToMinutes from "../utils/convertMsToMinutes";

export default {
  name: "AlbumPage",
  components: { AlbumCover },
  computed: {
    albumDetail() {
      return this.$store.getters.getAlbumDetailById(this.$route.params.id);
    },
    tracks() {
      return this.$store.getters.getTracksByAlbumId(this.albumId);
    },
  },
  methods: {
    getDurationFormatted(duration) {
      const convertedDuration = convertMsToMinutes(duration);
      return `${convertedDuration.minutes}:${convertedDuration.seconds}`;
    },
  },
  watch: {
    albumDetail: function (val) {
      if (val.idAlbum) {
        this.$store.dispatch("fetchTracksOfAlbum", val.idAlbum);
        this.albumId = val.idAlbum;
      }
    },
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
  height: calc(100vh - 400px);
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
  overflow-y: auto;
  height: 100%;
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
