<template>
  <fragment>
    <div id="header">
      <header-component />
    </div>
    <div class="terms is_showing">
      <div class="terms-wrapper wrapper">
        <div class="terms-container">
          <h3 class="title">Activation Terms of use</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur sit saepe magnam dignissimos accusantium soluta cumque nam, sapiente molestias sunt. Optio ad esse excepturi alias incidunt quibusdam quo? Ullam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur sit saepe magnam dignissimos accusantium soluta cumque nam, sapiente molestias sunt. Optio ad esse excepturi alias incidunt quibusdam quo? Ullam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur sit saepe magnam dignissimos accusantium soluta cumque nam, sapiente molestias sunt. Optio ad esse excepturi alias incidunt quibusdam quo? Ullam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur sit saepe magnam dignissimos accusantium soluta cumque nam, sapiente molestias sunt. Optio ad esse excepturi alias incidunt quibusdam quo? Ullam.</p>
        </div>
        <div class="terms-container">
          <h3 class="title">Activation Terms of use</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur sit saepe magnam dignissimos accusantium soluta cumque nam, sapiente molestias sunt. Optio ad esse excepturi alias incidunt quibusdam quo? Ullam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, consequatur sit saepe magnam dignissimos accusantium soluta cumque nam, sapiente molestias sunt. Optio ad esse excepturi alias incidunt quibusdam quo? Ullam.</p>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import HeaderComponent from '@/components/HeaderComponent';

export default {
  name: 'Terms',
  components: {
    fragment: Fragment,
    'header-component': HeaderComponent,
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 0.12em;
  line-height: 1.87;
  letter-spacing: 0.29px;
  word-spacing: 1.21px;
  font-size: calc(28px + (600vw - 2880px) / 920);
  font-weight: 900;
  color: #002374c4;
}

.terms {
  width: 100%;
  height: 100%;

  .terms-wrapper {
    width: 90%;
    margin: auto;
    padding: 4em 0;

    @media only screen and (max-width: 767px) {
      padding: 2em 0;
    }

    @media only screen and (max-width: 561px) {
      padding: 2em 10px;
      width: 100%;
    }

    .wrapper {
      width: 1200px;
      margin: auto;

      @media only screen and (max-width: 1360px) {
        width: 90%;
      }

      @media only screen and (max-width: 1200px) {
        width: 100%;
      }
    }

    .terms-container {
      margin-bottom: 1.21em;

      h3 {
        @media only screen and (max-width: 360px) {
          line-height: 1em;
          margin-bottom: 0.61em;
        }
      }

      p {
        font-size: 15.3px;
        letter-spacing: 0.56px;
        word-spacing: 1.23px;
        line-height: 1.54;
        color: #000716;
        margin-bottom: 1.11em;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
