<template>
  <!-- nav bar -->
  <div class="nav-bar-container flex-container">
    <!-- logo -->
    <div class="logo-container">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" class="logo" />
      </router-link>
    </div>
    <!-- navs -->
    <nav class="nav-bar">
      <ul class="flex-container">
        <li>
          <router-link to="/" class="active-nav">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss">
@import '../scss/_mixins';

.nav-bar-container {
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  height: 75px;
  overflow: hidden;
  width: 1100px;
  margin: auto;
  background-color: transparent;
  display: flex;

  @include media-query(1440px, 2600px) {
    width: 70%;
  }

  @include media-query(1440px) {
    width: 80%;
  }

  @include media-query(450px) {
    width: 90%;
    height: 60px;
  }

  .logo-container {
    width: 75px;

    @include media-query(450px) {
      width: 60px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .nav-bar {
    li {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }

      a {
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 0.67px;
        color: #fff;
        font-weight: 600;

        &:hover {
          color: darken(skyblue, 23%);
        }

        @media only screen and (max-width: 750px) {
          font-size: 12px;
        }
      }
      a.active-nav {
        color: skyblue;
      }
    }
  }
}
</style>
