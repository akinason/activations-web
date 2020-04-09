<template>
  <header class="header-container">
    <video id="bgVideo" autoplay loop>
      <!-- Video is embedded in the WEBM format -->
      <source src="../assets/Network.webm" type="video/webm" />
    </video>
    <div class="header-wrapper">
      <!-- header nav -->
      <header-component />

      <!-- header content -->
      <div class="header-content">
        <div class="content-wrapper">
          <h1>
            Access
            <span>2,674,500</span> application and activation
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <!-- search bar -->
        <div class="search-container">
          <div class="form-control">
            <input type="text" name="search" id="search" placeholder="search by app name" autocomplete="off" v-model="filterName" />
            <button class="btn-search" @click="filterSoftware">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </button>
          </div>
          <p id="promotion-text">use application url to promote the app</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderComponent from './HeaderComponent';
import { bus } from '../main';

export default {
  name: 'Banner',
  components: {
    'header-component': HeaderComponent,
  },
  data() {
    return {
      filterName: '',
    };
  },
  methods: {
    filterSoftware: function(value) {
      if (typeof value != 'string') {
        value = this.filterName;
      }
      bus.$emit('filterSoftware', value);
    },
  },
  watch: {
    filterName: function(value) {
      this.filterSoftware(value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import '../scss/_mixins';

header {
  width: 100%;
  height: 455px;
  overflow: hidden;
  position: relative;

  video#bgVideo {
    position: absolute; // Play the video in full screen mode
    top: 0px;
    left: 0px;
    min-width: 100%;
    min-height: 100%;
    // z-index: ; // Put the video behind all other elements
  }

  .header-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #042042de;
  }

  // header content
  .header-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -25%);
    width: 850px;
    margin: 0 auto;

    @include media-query(1440px, 2600px) {
      width: 960px;
    }

    @include media-query(950px) {
      width: 80%;
    }
    @include media-query(450px) {
      width: 95%;

      button.btn-search {
        display: none !important;
      }
    }
    @include media-query(426px) {
      transform: translate(-50%, -40%);
    }

    .content-wrapper {
      width: 100%;
      text-align: center;

      h1 {
        font-size: calc(32px + (600vw - 2880px) / 920);
        font-weight: 560;
        margin-bottom: 0.62em;
        line-height: 1.5;
        color: #fff;

        span {
          color: #4ad295;
        }
      }

      p {
        font-size: 1em;
        font-weight: 400;
        color: #fff;
        line-height: 1.2;
        margin: 0 0 0.75em;
      }
    }

    .search-container {
      width: 100%;

      .form-control {
        height: 64px;
        line-height: 64px;
        background-color: #fff;
        border-radius: 3px;
        margin: 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        input#search {
          border: none;
          background-color: transparent;
          flex-grow: 1;
          padding: 0 10px;
          height: 64px;
          line-height: 64px;
          white-space: nowrap;
          color: #1d262d;
          font-size: 1em;
          font-family: 'Roboto', sans-serif;
          font-weight: 540;
        }

        button.btn-search {
          width: 64px;
          height: 64px;
          line-height: 64px;
          border: none;
          background: none;
          color: #374957;
          box-shadow: none;
          user-select: none;
          vertical-align: middle;
          white-space: nowrap;
          outline: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }

    #promotion-text {
      font-size: 1em;
      font-weight: 600;
      color: #fff;
      line-height: 1.2;
      margin: 0 0 0.75em;
      text-align: center;
      margin-top: 1.45em;
    }
  }
}
</style>
