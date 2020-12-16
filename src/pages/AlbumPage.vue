<template>
  <section class="album">
    <div class="album-details">
      <AlbumCover
        src="https://i.scdn.co/image/ab67616d0000b273039e09bc5da028fbceee8363"
        classModifier="shadowBlack"
      />

      <h1 class="album-detailsTexts">
        <span class="album-name">
          Cyberpunk 2077 - Original Score EP
        </span>
        <span class="album-meta">
          <ul class="album-artists">
            <span class="album-artist">Marcin Przybyłowicz</span>
            <span class="album-artist">P.T. Adamczyk</span>
            <span class="album-artist">Paul Leonard-Morgan</span>
          </ul>
        </span>
      </h1>
    </div>
  </section>
</template>

<script>
import AlbumCover from "../components/AlbumCover";

export default {
  name: "AlbumPage",
  components: { AlbumCover },
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

.album-detailsTexts {
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
</style>
