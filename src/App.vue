<template>
  <div id="app">
    <router-view />
    <spinner-component v-if="isLoading" />
    <pop-up-component v-if="data" :data="data" />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent';
import SpinnerComponent from '@/components/SpinnerComponent';
import PopUpComponent from '@/components/PopUpComponent';
import { bus } from './main';

export default {
  name: 'App',
  components: {
    'footer-component': FooterComponent,
    'spinner-component': SpinnerComponent,
    'pop-up-component': PopUpComponent,
  },
  data() {
    return {
      isLoading: false,
      data: null,
    };
  },

  created() {
    bus.$on('toggleLoading', () => {
      this.isLoading = !this.isLoading;
    });
    bus.$on('popup', (data) => {
      this.data = data;
    });
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  font-style: normal;
  font-stretch: normal;
}

footer {
  margin-top: auto;
}

#app {
  font-family: 'Dosis', sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111316;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.flex-container {
  display: flex;
}

ul {
  list-style-type: none;
}

a,
button,
input {
  text-decoration: none;
  outline: none;
}

#header {
  width: 100%;
  background-color: #031545;
}

.is_showing {
  animation: slide_show 250ms ease-out forwards;
}

@keyframes slide_show {
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
