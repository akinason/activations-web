<template>
  <footer class="footer-container">
    <div class="footer-wrapper flex-container">
      <!-- <p>&copy;copyright 2020</p> -->
      <ul class="navs flex-container">
        <li>
          <p>copyright &copy;{{ new Date().getFullYear() }}</p>
        </li>
        <li>
          <a href="#">twitter</a>
        </li>
        <li>
          <a href="#">facebook</a>
        </li>
        <li>
          <a href="#">youtube</a>
        </li>
        <li>
          <a href="#">terms</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../scss/_mixins';

footer.footer-container {
  height: 100px;
  width: 100%;
  background-color: #00040e;

  .footer-wrapper {
    align-items: center;
    width: 1100px;
    height: 100%;
    margin: auto;
    background-color: transparent;
    flex-wrap: wrap;

    @include media-query(1440px) {
      width: 80%;
    }

    p,
    a {
      color: white;
      transition: color 90ms linear;
      word-wrap: normal;
      word-break: keep-all;
    }
    p {
      user-select: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      color: #c3c3c3e0;
    }
  }

  .navs {
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;

    a {
      text-transform: capitalize;
      letter-spacing: 0.64px;
      line-height: 1.67;

      &:hover {
        color: darken(#fff, 30%);
      }
    }
  }
}
</style>
