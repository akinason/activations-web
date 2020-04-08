<template>
  <div class="software-container">
    <div class="header">
      <header-component id="header-component" />
    </div>
    <div class="software-wrapper">
      <div class="software" v-if="software">
        <!-- app description -->
        <div class="app-details flex-container">
          <div class="details">
            <div class="header">
              <h3>{{ software.name }}</h3>
              <span>version {{ software.version }}</span>
              <p>{{ software.short_description }}</p>
            </div>
            <div class="app-description">
              <span class="labels">description</span>
              <div v-for="description in software.descriptions" :key="description.id">
                <h3>{{ description.title }}</h3>
                <p>{{ description.content }}</p>
              </div>
            </div>
          </div>
          <div class="ext-details">
            <div class="ext-container">
              <ul>
                <li>
                  <a target="_blank" :href="software.download_link">download</a>
                </li>
                <li>
                  <a target="_blank" :href="software.documentation_link">documentation</a>
                </li>
              </ul>
            </div>
            <div class="author-container">
              <span class="labels">author</span>
              <p>
                name:
                <span>{{ software.author.first_name }} {{ software.author.last_name }}</span>
              </p>
              <p>
                website:
                <span>{{ software.author.website }}</span>
              </p>
              <p>
                email:
                <span>{{ software.author.email }}</span>
              </p>
              <p>
                mobile:
                <span>{{ software.author.mobile }}</span>
              </p>

              <div class="logo-app">
                <img :src="software.preview_image" alt="img" class="logo" />
              </div>
            </div>
          </div>
        </div>

        <!-- youtube iframe -->
        <div class="youtube-container" v-if="software.video_link">
          <iframe :src="video_link(software.video_link)" width="100%" height="450px" frameborder="0" class="youtube" allowfullscreen></iframe>
        </div>
        <!-- licences payment -->
        <div v-if="software.licenses">
          <div class="license-container flex-container">
            <div class="purchase-license" v-for="license in software.licenses" :key="license.id">
              <form action method="post">
                <input readonly type="text" name="type" id="type" :value="license.type + ' billing'" />
                <input readonly type="text" name="price" id="price" :value="'$' + license.price" />
                <input readonly type="text" name="currency" id="currency" :value="license.currency" />
                <input readonly type="text" name="duration" id="duration" :value="license.duration + ' days'" />
                <router-link :to="{ path: `/software/${software.id}/license`, query: license }">buy license</router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent';
import { bus } from '../main';
import axios from '../api/axios';

export default {
  name: 'Software',
  components: {
    'header-component': HeaderComponent,
  },
  data() {
    return {
      software: '',
    };
  },
  methods: {
    video_link(url) {
      let url_link = url.split('/');
      let filename = url_link[url_link.length - 1];
      return `https://www.youtube.com/embed/${filename}`;
    },
  },
  beforeMount() {
    bus.$emit('toggleLoading');
  },
  mounted() {
    axios
      .get(`/api/softwares/${this.$route.params.id}`)
      .then((response) => {
        this.software = response.data.data;
        bus.$emit('toggleLoading');
      })
      .catch((error) => {
        bus.$emit('popup', { success: false, msg: error });
        bus.$emit('toggleLoading');
      });
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/_mixins';

.software-container > .header {
  width: 100%;
  background-color: #031545;
}

.software-wrapper {
  width: 1200px;
  margin: 50px auto;

  @include media-query(1024px, 1400px) {
    width: 80%;
  }

  @include media-query(1024px) {
    width: 95%;
  }
  @include media-query(600px) {
    margin-top: 20px;
  }

  .app-details {
    justify-content: space-between;
    padding: 0 0 15px;
    margin-bottom: 1.67em;
    color: rgb(2, 25, 39);

    @include media-query(672px) {
      flex-wrap: wrap;
    }

    span.labels {
      font-size: 11px;
      letter-spacing: 0.65px;
      line-height: 1.34;
      text-transform: uppercase;
      color: #949597de;
      font-weight: 540;
      margin: 2em 0 1em;
      display: block;
      user-select: none;
    }

    .details {
      width: 65%;
      position: relative;

      @include media-query(672px) {
        width: 100%;
        margin-bottom: 1em;
      }

      .header {
        width: 100%;
        margin-bottom: 10px;
        padding-bottom: 10px;
        border-bottom: 1px solid #ddd3;

        h3 {
          font-size: calc(13px + (600vw - 2880px) / 920);
          font-weight: 500;
          line-height: 1.56;
          letter-spacing: 0.67px;
          word-spacing: 1px;

          @include media-query(600px) {
            font-size: calc(18px + (600vw - 2880px) / 920);
          }
        }
        span {
          font-size: 13px;
          font-weight: 460;
          margin-bottom: 8px;
          color: #949597de;
        }

        p {
          margin: 0.79em 0 0;
          font-size: 14px;
          letter-spacing: 0.56px;
          word-spacing: 1.2px;
          line-height: 1.65;
          color: rgba(32, 35, 41, 0.979);
        }
      }

      .app-description {
        width: 100%;

        & > div {
          margin-bottom: 1.54em;
        }

        h3 {
          font-size: calc(11px + (600vw - 2880px) / 920);
          font-weight: 600;
          line-height: 1.56;
          letter-spacing: 0.67px;
          word-spacing: 1px;
          margin: 0 0 0.32em;
          color: #103541;

          @include media-query(600px) {
            font-size: calc(18px + (600vw - 2880px) / 920);
          }
        }
        p {
          font-size: 14px;
          letter-spacing: 0.56px;
          word-spacing: 1.2px;
          line-height: 1.45;
          color: rgba(32, 35, 41, 0.979);
        }
      }
    }

    // ext-details
    .ext-details {
      width: 30%;

      @include media-query(672px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1em 0;
      }

      @include media-query(500px) {
        flex-wrap: wrap;
      }

      .ext-container {
        width: 100%;

        @include media-query(672px) {
          width: 60%;
        }

        @include media-query(500px) {
          width: 100%;
        }

        li {
          margin-bottom: 10px;

          a {
            display: inline-block;
            color: #fff;
            padding: 17px;
            background-color: green;
            border-radius: 3px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.56px;
            width: 100%;
            text-align: center;
            max-width: 80%;
            cursor: pointer;
            transition: background-color 150ms;

            @include media-query(672px) {
              max-width: 100%;
              display: block;
            }

            &:hover {
              background-color: rgb(5, 95, 5);
            }
          }
        }
      }

      .author-container {
        @include media-query(672px) {
          width: 48%;

          span.labels {
            margin-top: 0;
          }
        }

        @include media-query(672px) {
          width: 48%;
          margin-left: 10px;
        }

        @include media-query(500px) {
          width: 100%;
          margin-top: 1.21em;
        }

        p {
          font-size: 13.56px;
          font-weight: 600;
          letter-spacing: 0.76px;
          word-spacing: 1px;
          line-height: 1.45;
          text-transform: capitalize;
          color: #020b22;

          span {
            font-weight: 400;
            text-transform: none;
          }
        }

        .logo-app {
          width: 100%;
          height: 100px;
          margin-top: 1.34em;
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          @include media-query(672px) {
            display: none;
          }
        }
      }
    }
  }

  // iframe
  .youtube-container {
    margin-bottom: 3.67em;
  }

  // license payment
  .license-container {
    width: 100%;
    max-width: 520px;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4.56em;

    @include media-query(1460px, 2600px) {
      max-width: 560px;
    }

    @include media-query(672px) {
      flex-wrap: wrap;
    }

    .purchase-license {
      width: 240px;

      @include media-query(672px) {
        width: 100%;
        margin-bottom: 1em;

        &:last-child {
          margin-bottom: 0;
        }
      }

      form {
        width: 100%;
        position: relative;
        border-radius: 5px;

        input {
          width: 100%;
          margin: auto;
          display: block;
          padding: 10px;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 0.67px;
          border: none;
          background-color: #fff;
          cursor: default;
          user-select: none;

          &:first-child {
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
            color: rgb(253, 253, 253);
            padding: 20px 0;
            background-color: rgb(113, 113, 247);
          }

          &:nth-child(2) {
            padding: 30px 0 0px;
            font-size: 32px;
            font-weight: 600;
          }
          &:nth-child(3) {
            padding: 2px 0 0;
            font-size: 11px;
            font-weight: 600;
          }
          &:nth-child(4) {
            padding: 20px 0 0px;
            font-size: 17px;
            font-weight: 400;
            text-transform: capitalize;
          }
        }

        a {
          width: 100%;
          padding: 15px;
          margin-top: 2.37em;
          border: none;
          background: none;
          background-color: rgb(114, 70, 184);
          color: #fff;
          text-transform: uppercase;
          cursor: pointer;
          transition: 170ms;
          letter-spacing: 0.67px;
          word-spacing: 1px;
          display: block;
          text-align: center;

          &:hover {
            background-color: rgb(58, 38, 90);
          }
        }
      }

      &:nth-child(2) {
        input {
          &:first-child {
            background-color: rgb(240, 204, 0) !important;
          }
        }
      }
    }
  }
}
</style>
