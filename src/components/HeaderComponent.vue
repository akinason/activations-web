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
        <li>
          <a href="https://account.gloxoninc.com/login/oauth/9288973975281" rel="noopener noreferrer">Login</a>
        </li>
        <li>
          <a href="https://account.gloxoninc.com/login/oauth/9288973975281" rel="noopener noreferrer">Signup</a>
        </li>
      </ul>
    </nav>
    <div class="humburger-container" @click="handleToggle">
      <span class="humburger"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleToggle(e) {
      if (e.target.localName == 'div') {
        e.target.firstChild.classList.toggle('active');
        e.target.previousElementSibling.classList.toggle('active');
        console.log(e.target);
      } else if (e.target.localName == 'span') {
        e.target.classList.toggle('active');
        e.target.parentElement.previousElementSibling.classList.toggle('active');
        console.log(e.target);
      }
    },
  },
};
</script>

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
  position: relative;

  @include media-query(1440px, 2600px) {
    width: 70%;
  }

  @include media-query(1440px) {
    width: 80%;
  }

  @media only screen and (max-width: 660px) {
    overflow: unset;
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

  .humburger-container {
    width: 40px;
    height: 40px;
    display: none;
    position: relative;
    place-items: center;
    cursor: pointer;

    @media only screen and (max-width: 660px) {
      display: grid;
    }

    span {
      position: relative;
      width: 33px;
      height: 3px;
      border-radius: 50px;
      background-color: rgb(248, 248, 248);
      transition: 120ms ease-in-out;

      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        width: 33px;
        height: 3px;
        border-radius: 50px;
        background-color: rgb(248, 248, 248);
        top: 9px;
        transition: 120ms ease-in-out;
      }

      &::before {
        top: -9px;
      }
    }

    span.active {
      height: 0;

      &::before {
        top: 0px;
        transform: rotate(45deg);
      }
      &::after {
        top: 0px;
        transform: rotate(135deg);
      }
    }
  }

  .nav-bar {
    @media only screen and (max-width: 660px) {
      position: absolute;
      width: 100%;
      // min-width: 100vw;
      // left: -5.5%;
      height: 0vh;
      overflow: hidden;
      text-align: center;
      top: 75px;
      background-color: #041f41db;
      z-index: 1;
      transition: 150ms ease-in-out;

      @media only screen and (max-width: 450px) {
        top: 60px;
      }

      &.active {
        height: 40vh;
      }

      ul {
        flex-direction: column;
        margin-top: 20px;

        li {
          margin: 0;
        }

        a {
          padding: 15px 0;
          display: block;
        }
      }
    }

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
