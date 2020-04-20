<template>
  <fragment>
    <div id="header">
      <header-component />
    </div>
    <div class="about">
      <div class="about-container">
        <div class="about-wrapper">
          <!-- header -->
          <div class="header wrapper flex-container">
            <!-- title wrapper -->
            <div class="title-wrapper">
              <h1 class="title">Get to know us</h1>
              <p>
                <strong>Activations</strong> is a an independent software powered by Extended Limits Inc, we enable developers and 
tech companies to focus on the core of their applications while we manage the sell of their license keys. 
              </p>
            </div>
            <div class="svg-container">
              <img src="../assets/undraw_feeling_proud_qne1.svg" alt="img" srcset="" />
            </div>
          </div>

          <!-- what we offer -->
          <div class="activation-offer wrapper">
            <div class="activation-offer-container">
              <h3 class="title offer-title">Why we do it</h3>
              <p>As the world is becoming digital, software developers and software companies are moving from the traditional method of storing license keys in their applications to storing them on the cloud. But we do not store them, we generate them on the fly.</p>
              <p></p>
            </div>
          </div>

          <!-- the origin of activation -->
          <div class="origin-wrapper wrapper">
            <div class="origin-container flex-container">
              <div class="origin">
                <h3 class="title origin-title">How we do it</h3>
                <p>Activations is an independent platform for managing the sell of application license keys.</p>
                <p>License keys are generated instantly after the client's payment has been confirmed and emailed to them.</p>
                <p>Using our API, software developers can then check for the validity of a license key from within their application when the client enters them and send a POST request to mark the license key as USED after giving value to the client.</p>
              </div>
              <div class="origin-img">
                <img src="../assets/undraw_team_spirit_hrr4.svg" alt="" />
              </div>
            </div>
          </div>

          <div class="know-more wrapper">
            <div class="know-more-container flex-container">
              <div class="img-container">
                <img src="../assets/undraw_young_and_happy_hfpe.svg" alt="image" />
              </div>

              <div class="know-more-content">
                <h3 class="title know-more-title">Do you want to know more or have any idea? <a href="/contact">Contact us</a></h3>
                <p>We believe we can make it better together.</p>
              </div>

              <div class="img-container">
                <img src="../assets/undraw_reading_0re1.svg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import HeaderComponent from '@/components/HeaderComponent';

export default {
  name: 'About',
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
  color: #00081bf1;
}

.about {
  width: 100%;
  height: 100%;

  .about-wrapper {
    width: 90%;
    margin: auto;
    padding-top: 4em;

    @media only screen and (max-width: 767px) {
      padding: 1em;
    }

    @media only screen and (max-width: 561px) {
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

    .header {
      padding-top: 1em;
      justify-content: space-between;
      overflow: hidden;
      height: 458px;

      @media only screen and (max-width: 767px) {
        flex-wrap: wrap;
      }

      .title-wrapper {
        width: 100%;
        text-align: center;
        align-self: center;

        h1 {
          margin-bottom: 0.12em;
          line-height: 1.87;
          font-size: calc(43px + (600vw - 2880px) / 920);
          font-weight: 900;
          color: #00081be0;

          @media only screen and (max-width: 767px) {
            font-size: calc(33px + (600vw - 2880px) / 920);
            line-height: 1.01;
          }
        }

        p {
          color: #002374c4;
          font-size: calc(11px + (600vw - 2880px) / 920);
          line-height: 1.67;
          letter-spacing: 0.78px;
          word-spacing: 1.23px;
        }
      }
    }
    .svg-container {
      width: 100%;

      @media only screen and (max-width: 767px) {
        width: 60%;
        margin: 0 auto;
      }

      @media only screen and (max-width: 561px) {
        width: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    // what we offer
    .activation-offer {
      margin-top: 2.92em;

      @media only screen and (max-width: 561px) {
        margin-top: 0.42em;
      }

      .activation-offer-container {
        padding: 20px 0;

        p {
          line-height: 1.45;
          letter-spacing: 0.35px;
          word-spacing: 1.27px;
          font-weight: 450;
          color: #00081bd7;
        }
      }
    }

    // origin container
    .origin-wrapper {
      margin-top: 2.87em;
      padding-top: 1em;
      position: relative;
      overflow: hidden;

      @media only screen and (max-width: 561px) {
        margin-top: 1.42em;
      }

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0%;
        left: 0;
        width: 6%;
        height: 1px;
        background-color: rgba(3, 18, 51, 0.123);
      }

      .origin-container {
        @media only screen and (max-width: 767px) {
          flex-wrap: wrap;
        }
      }

      .origin {
        width: 100%;

        @media only screen and (max-width: 561px) {
          margin-top: 0.42em;
        }

        @media only screen and (max-width: 767px) {
          order: 1;
        }

        h3 {
          font-size: calc(30px + (600vw - 2880px) / 920);
        }
        p {
          font-size: calc(11px + (600vw - 2880px) / 920);
          line-height: 1.67;
          letter-spacing: 0.28px;
          word-spacing: 1px;
          color: #00081bd7;
          margin-bottom: 1.21em;

          &:last-child {
            margin-bottom: 0;
          }

          @media only screen and (min-width: 1440px) {
            font-size: calc(8px + (600vw - 2880px) / 920);
          }
        }
      }
      .origin-img {
        width: 100%;

        @media only screen and (max-width: 767px) {
          width: 70%;
          margin: 0 auto;
        }

        @media only screen and (max-width: 561px) {
          width: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }

    // know more
    .know-more {
      margin: 3.32em auto 3.98em;
      height: 238px;

      box-shadow: 0px 0px 15px 1px rgba(1, 26, 77, 0.185);

      @media only screen and (max-width: 660px) {
        height: 100%;
      }

      @media only screen and (max-width: 561px) {
        margin: 2.42em 0;
      }

      .know-more-container {
        @media only screen and (max-width: 660px) {
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
          padding: 1.52em 0;
        }

        @media only screen and (max-width: 561px) {
          padding: 1.52em 10px;
        }
      }

      .img-container {
        width: 338px;
        height: 100%;
        margin-top: 10px;

        @media only screen and (max-width: 767px) {
          &:first-child {
            display: none;
          }
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .know-more-content {
        align-self: center;
        text-align: center;

        h3 {
          font-size: calc(17px + (600vw - 2880px) / 920);
          line-height: 1.24;
          margin-bottom: 1.23em;
        }

        p {
          @media only screen and (max-width: 660px) {
            margin-bottom: 1.21em;
          }
        }
      }
    }
  }
}
</style>
