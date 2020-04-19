<template>
  <fragment>
    <div id="header">
      <header-component />
    </div>
    <div class="success-payment flex-container">
      <div class="success-payment-wrapper">
        <!-- success-mark ticker -->
        <div class="success-checkmark-container">
          <div class="success-checkmark">
            <div class="check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
        </div>
        <!-- success-content -->
        <div class="success-content-container">
          <div class="success-content">
            <h3 class="order-reference">order&#35;: {{ $route.query.reference }}</h3>
            <p class="message">
              {{ $route.query.name }} thanks for your payment. check your
              <i
                ><strong><a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">email</a></strong></i
              >
              for the license code
            </p>
            <form action="" @submit.prevent="resendLicenseKey" method="post">
              <p>didn't resend it?</p>
              <button type="submit">resend</button>
            </form>
          </div>
        </div>
      </div>
      <div class="img-container">
        <img src="../assets/undraw_receipt_ecdd.svg" alt="mail-sent" srcset="" />
      </div>
    </div>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import { bus } from '../main';
import axios from '../api/axios';
import HeaderComponent from '@/components/HeaderComponent';

export default {
  name: 'SuccessPayment',
  components: {
    fragment: Fragment,
    'header-component': HeaderComponent,
  },
  methods: {
    resendLicenseKey() {
      bus.$emit('toggleLoading');
      try {
        axios
          .post('api/orders/email/resend', { reference: this.$route.query.reference })
          .then(() => {
            bus.$emit('popup', { success: true, msg: 'Mail resend successfully please check your mails' });
            return bus.$emit('toggleLoading');
          })
          .catch((error) => {
            if (error.response) {
              bus.$emit('popup', { success: false, msg: error.response.data.error });
              return bus.$emit('toggleLoading');
            }
          });
      } catch (error) {
        if (error) {
          bus.$emit('popup', { success: false, msg: 'Error occured while trying to resending mail' });
          return bus.$emit('toggleLoading');
        }
      }
    },
  },
};
</script>

<style lang="scss">
@import '../scss/_mixins';

.success-payment {
  width: 1200px;
  margin: 100px auto;
  position: relative;

  @include media-query(1300px) {
    margin: 70px auto;
    width: 90%;
  }

  @include media-query(670px) {
    margin: 20px auto;
    width: 95%;
    flex-wrap: wrap;
  }

  .success-payment-wrapper {
    max-width: 540px;
    // margin: 0 auto;
    order: 1;

    @include media-query(670px) {
      max-width: 100%;
      margin-top: 1rem;
    }
  }

  .img-container {
    // margin: auto;

    @media only screen and (min-width: 1280px) {
      height: 500px;
    }
    @media only screen and (max-width: 1280px) {
      height: 358px;
    }
    @media only screen and (max-width: 670px) {
      height: 200px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .success-content-container {
    width: 100%;
    padding: 25px;
    background-color: #fff;
    box-shadow: 1px 2px 3px rgba(76, 175, 80, 0.5);

    .success-content {
      width: 100%;
      height: 100%;
      color: #050705;

      h3 {
        text-align: end;
        font-size: 17.87px;
        font-weight: 560;
        line-height: 1.76;
        letter-spacing: 0.76px;
        word-spacing: 1.21px;
        text-transform: capitalize;
        margin-bottom: 1.23em;
      }

      p {
        @extend h3;
        text-align: start;
        font-size: 14.87px;
        font-weight: 400;
        line-height: 1.53em;

        a {
          color: #f84545c7;
          transition: color 150ms ease-in-out;

          &:hover {
            color: #f84545;
          }
        }
      }

      form {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-end;

        p {
          margin: 0;
          padding: 0;
          color: #1f241ff5;
          margin-right: 1em;
          font-size: 13px;
          font-weight: 400;
        }

        button {
          border: none;
          background: none;
          color: #1f241ff5;
          font-size: 13px;
          font-weight: 400;
          cursor: pointer;
          transition: all ease 120ms;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}

/**
 * Extracted from: SweetAlert
 * Modified by: Istiak Tridip
 */
.success-checkmark-container {
  @media only screen and (max-width: 670px) {
    display: none;
  }
}

.success-checkmark {
  width: 80px;
  height: 115px;
  margin: 0 auto;

  .check-icon {
    width: 80px;
    height: 80px;
    position: relative;
    border-radius: 50%;
    box-sizing: content-box;
    border: 4px solid #4caf50;

    &::before {
      top: 3px;
      left: -2px;
      width: 30px;
      transform-origin: 100% 50%;
      border-radius: 100px 0 0 100px;
    }

    &::after {
      top: 0;
      left: 30px;
      width: 60px;
      transform-origin: 0 50%;
      border-radius: 0 100px 100px 0;
      animation: rotate-circle 4.25s ease-in;
    }

    &::before,
    &::after {
      content: '';
      height: 100px;
      position: absolute;
      background: #ffffff;
      transform: rotate(-45deg);
    }

    .icon-line {
      height: 5px;
      background-color: #4caf50;
      display: block;
      border-radius: 2px;
      position: absolute;
      z-index: 1;

      &.line-tip {
        top: 46px;
        left: 14px;
        width: 25px;
        transform: rotate(45deg);
        animation: icon-line-tip 0.75s;
      }

      &.line-long {
        top: 38px;
        right: 8px;
        width: 47px;
        transform: rotate(-45deg);
        animation: icon-line-long 0.75s;
      }
    }

    .icon-circle {
      top: -4px;
      left: -4px;
      z-index: 1;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      position: absolute;
      box-sizing: content-box;
      border: 4px solid rgba(76, 175, 80, 0.5);
    }

    .icon-fix {
      top: 8px;
      width: 5px;
      left: 26px;
      z-index: 0;
      height: 85px;
      position: absolute;
      transform: rotate(-45deg);
      background-color: #ffffff;
    }
  }
}

@keyframes rotate-circle {
  0% {
    transform: rotate(-45deg);
  }
  5% {
    transform: rotate(-45deg);
  }
  12% {
    transform: rotate(-405deg);
  }
  100% {
    transform: rotate(-405deg);
  }
}

@keyframes icon-line-tip {
  0% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  54% {
    width: 0;
    left: 1px;
    top: 19px;
  }
  70% {
    width: 50px;
    left: -8px;
    top: 37px;
  }
  84% {
    width: 17px;
    left: 21px;
    top: 48px;
  }
  100% {
    width: 25px;
    left: 14px;
    top: 45px;
  }
}

@keyframes icon-line-long {
  0% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  65% {
    width: 0;
    right: 46px;
    top: 54px;
  }
  84% {
    width: 55px;
    right: 0px;
    top: 35px;
  }
  100% {
    width: 47px;
    right: 8px;
    top: 38px;
  }
}
</style>
