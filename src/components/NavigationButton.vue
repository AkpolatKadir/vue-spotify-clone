<template>
  <a class="navigationButton" href>
    <img
      class="navigationButton-icon"
      :class="`navigationButton-icon--${navItem.iconModifier}`"
    />
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

  &-icon {
    height: 24px;
    width: 24px;
    margin-right: 10px;
    background-color: #b3b3ae;

    &--home {
      mask: url("../assets/icons/home.svg");
    }
    &--search {
      mask: url("../assets/icons/search.svg");
    }
    &--library {
      mask: url("../assets/icons/library.svg");
    }
    &--heart {
      mask: url("../assets/icons/heart.svg");
    }
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
