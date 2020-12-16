<template>
  <div class="albumCover" :class="`albumCover--${classModifier}`">
    <img v-bind:src="src" />
  </div>
</template>

<script>
export default {
  name: "AlbumCover",
  props: {
    src: String,
    classModifier: String,
  },
};
</script>

<style lang="scss">
.albumCover {
  display: inline-block;
  img {
    min-height: 192px;
    min-width: 192px;
    max-height: 232px;
    max-width: 232px;
  }

  &--shadowBlack {
    box-shadow: 0px 5px 10px 10px rgba(0, 0, 0, 0.5);
  }
}
</style>
