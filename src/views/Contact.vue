<template>
  <fragment>
    <div id="header">
      <header-component />
    </div>
    <div class="contact is_showing">
      <div class="contact-wrapper">
        <div class="contact-container flex-container wrapper">
          <div class="contact-details">
            <h3 class="title">How can we help you?</h3>
            <p>Are you a developer or technology company wishing to distribute your applications and sell license keys using Activations? Or Are you a client who has an issue after purchasing a license?</p>
            <br />
            <p>Send us a mail or write us on WhatsApp using the contact details below.</p>
            <h2 class="title detail-title">Contact details</h2>
            <div class="details-container">
              <p><span>WhatsApp: </span><a href="https://wa.me/237691270063" target="_blank">(+237) 691270063</a></p>
              <p><span>email: </span><a href="mailto:gloxongp@gmail.com" target="_blank">gloxongp@gmail.com</a></p>
            </div>
          </div>
          <div class="img-container">
            <img src="../assets/undraw_contact_us_15o2.svg" alt="image" />
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
  name: 'Contact',
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

.contact {
  width: 100%;
  height: 100%;

  .contact-wrapper {
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

    .contact-container {
      @media only screen and (max-width: 767px) {
        flex-wrap: wrap;
      }
    }

    .contact-details {
      width: 100%;
      align-self: center;

      @media only screen and (max-width: 767px) {
        order: 1;
        margin-top: 1em;
      }

      h3 {
        color: #00081be0;
      }

      p {
        font-size: 14.3px;
        letter-spacing: 0.56px;
        word-spacing: 1.23px;
        line-height: 1.54;
        color: #002374c4;
      }

      h2 {
        margin-top: 1em;
      }

      .details-container {
        p {
          margin-bottom: 0.23em;
          color: #051331;

          span {
            text-transform: uppercase;
            font-weight: 600;
          }

          a {
            color: #051331;
            transition: color 150ms ease-in;

            &:hover {
              color: #1848af;
            }
          }

          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }

    .img-container {
      width: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
