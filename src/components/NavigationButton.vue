<template>
  <a class="navigationButton" href>
    <i v-if="navItem.iconName" :class="`${navItem.iconName}`" />
    <div class="navigationButton-text">
      {{ navItem.text }}
    </div>
  </a>
</template>

<script>
export default {
  name: "NavigationButton",
  props: {
    navItem: {
      text: {
        type: String,
        required: true,
      },
      iconModifier: String,
      url: String,
    },
  },
};
</script>

<style lang="scss">
.navigationButton {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #b3b3ae;
  text-decoration: none;

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
</style>
