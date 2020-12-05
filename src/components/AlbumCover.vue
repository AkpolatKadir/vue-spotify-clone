<template>
  <div class="albumCover">
    <img v-bind:src="src" />
  </div>
</template>

<script>
export default {
  name: "AlbumCover",
  props: {
    src: String,
  },
};
</script>

<style>
.albumCover {
  max-height: 192px;
  max-width: 192px;
}
</style>
