<template>
  <div id="app">
    <header-component />
    <software-list :software="software" />
    <footer-component />
  </div>
</template>

<script>
import SoftwateList from './components/SoftwareList';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import axios from './api/axios';

export default {
  name: 'App',
  components: {
    'software-list': SoftwateList,
    'header-component': HeaderComponent,
    'footer-component': FooterComponent,
  },
  data() {
    return {
      software: '',
    };
  },
  mounted() {
    axios
      .get('api/softwares')
      .then((response) => {
        if (response.data.success) return (this.software = response.data.data);
      })
      .catch((error) => {
        console.log(error);
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
</style>
