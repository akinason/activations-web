<template>
  <div class="popup-container">
    <div class="popup-wrapper">
      <div :class="data.success ? 'wrapper success' : 'wrapper error'">
        <div class="container success" v-if="Object.prototype.toString.call(data) == '[object Array]'">
          <div class="popup-wrapper" v-for="(item, index) in data" :key="index">
            <p :class="data.success ? 'success' : 'error'">{{ item.msg }}</p>
          </div>
          <button class="close" @click="closePopup">x</button>
        </div>
        <div class="container success" v-else>
          <div class="popup-wrapper">
            <p :class="data.success ? 'success' : 'error'">{{ data.msg }}</p>
          </div>
          <button class="close" @click="closePopup">x</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from '../main';

export default {
  name: 'Error',
  props: ['data'],
  methods: {
    closePopup: function() {
      bus.$emit('popup', null);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_mixins';

.popup-container {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 99;
  opacity: 1;
  background-color: rgba(211, 211, 211, 0.226);

  & > .popup-wrapper {
    width: fit-content;
    min-width: 300px;
    margin: auto;
    padding: 30px;
    border-radius: 3px;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include media-query(767px) {
      top: 17%;
    }
  }
}

.wrapper {
  position: relative;
  background-color: rgba(255, 255, 255, 0.945);
  border-radius: 6px;
  padding: 12px;
  min-width: 204px;
}

.container {
  min-width: 160px;
  user-select: none;
  transition: all 150ms;

  .popup-wrapper {
    position: relative;

    p {
      letter-spacing: 0.67px;
      word-spacing: 1px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.76;
      font-size: 13px;
      text-transform: capitalize;
    }
  }
  button {
    position: absolute;
    top: 0px;
    right: 3px;
    border: none;
    background: none;
    padding: 2px;
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    color: rgb(167, 21, 21);

    &:active {
      color: #342874;
    }
  }
}

.wrapper.success {
  border: 1.58px solid rgba(106, 243, 93, 0.575);

  p {
    color: rgb(12, 148, 0);
  }
}

.wrapper.error {
  border: 1.58px solid rgba(243, 93, 93, 0.575);

  p {
    color: rgb(243, 26, 26);
  }
}
</style>
