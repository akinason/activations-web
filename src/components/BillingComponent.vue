<template>
  <div class="billing-container" :class="iscomplete ? 'completed' : ''">
    <div class="header">
      <header-component id="header-component" />
    </div>
    <div class="billing-wrapper">
      <div class="billing flex-container">
        <div class="bill-container">
          <div class="bill">
            <p>
              bill
              <strong>{{ $route.query.price }} usd</strong>
            </p>
          </div>
        </div>
        <div class="grid-container">
          <div class="billing-info">
            <div class="billing-info-container">
              <h3>Billing information</h3>
              <div class="info-container">
                <form action method="post" @submit.prevent="handleBillingSubmit">
                  <input type="text" autocomplete="off" name="name" id="name" v-model="name" placeholder="Enter name" />
                  <input @focus="onFocus" @blur="onBlur" type="email" name="email" id="email" v-model="email" placeholder="Enter email" />
                  <input type="text" autocomplete="off" name="address" id="address" v-model="address" placeholder="Enter address" />
                  <vue-tel-input @validate="validateNumber" autocomplete="off" v-model="phone" v-on:country-changed="countryChange" />
                  <input type="text" autocomplete="off" name="country" id="country" v-model="country" placeholder="Enter country" readonly />
                  <button type="submit">proceed</button>
                </form>
              </div>
            </div>
          </div>
          <div class="details-container">
            <p>We need this to sent the license key to you</p>
          </div>
        </div>
      </div>
    </div>

    <!-- modal confirm container -->
    <confirm-billing-component @closeModal="closeModal($event)" v-if="iscomplete" :user="{ name, email, address, phone, iso2, license }" />
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent';
import ConfirmBillingComponent from '@/components/ConfirmBillingComponent';
import { bus } from '../main';

export default {
  name: 'Billing',
  components: {
    'header-component': HeaderComponent,
    'confirm-billing-component': ConfirmBillingComponent,
  },
  data() {
    return {
      name: null,
      email: null,
      address: null,
      phone: null,
      country: null,
      iso2: null,
      license: null,
      iscomplete: false,
      isValid: false,
    };
  },
  methods: {
    countryChange: function(country) {
      this.iso2 = country.iso2;
      this.country = country.name;
    },
    onFocus() {
      let details = document.querySelector('.details-container');
      details.style.opacity = 1;
    },
    onBlur() {
      let details = document.querySelector('.details-container');
      details.style.opacity = 0;
    },
    validateNumber({ isValid }) {
      return (this.isValid = isValid);
    },

    handleBillingSubmit() {
      let errors = [];
      if (!this.name || this.name.length < 5) {
        errors.push({ msg: 'Please enter full name' });
      }
      if (!this.email) {
        errors.push({ msg: 'Please enter email' });
      }
      if (!this.address || this.address.length < 2) {
        errors.push({ msg: 'Please enter address' });
      }
      if (!this.phone || !this.isValid) {
        errors.push({ msg: 'Please enter phone' });
      }
      if (!this.iso2) {
        errors.push({ msg: 'Please enter country' });
      }

      if (errors.length > 0) {
        errors.push({ success: false });
        return bus.$emit('popup', errors);
      }

      this.iscomplete = true;
    },
    closeModal(event) {
      this.iscomplete = event;
    },
  },
};
</script>

<style lang="scss">
@import '../scss/_mixins';

.billing-container > .header {
  width: 100%;
  background-color: #031545;
}

.billing-container {
  height: calc(100vh - 40px);

  @include media-query(1200px, 1440px) {
    height: calc(100vh - 110px);
  }

  @include media-query(1441px, 2960px) {
    height: calc(100vh - 336px);
  }
}

.billing-container.completed {
  @include media-query(715px) {
    height: 130vh;
  }
}

.billing-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  color: #031545;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .billing {
    flex-direction: column;
    align-items: center;

    @include media-query(768px) {
      align-items: flex-start;
      padding: 0;
    }
  }

  .bill-container {
    width: 100%;
    margin: 0 0 20px;

    p {
      text-align: center;
      font-size: 17px;
      letter-spacing: 0.87px;
      word-spacing: 1px;
      font-weight: 600;
      text-transform: uppercase;

      strong {
        word-spacing: -3.67px;
        margin-left: 3px;
      }
    }
  }

  .grid-container {
    width: 340px;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    padding-bottom: 40px;

    @include media-query(768px) {
      width: 360px;
      padding: 0 0 40px 15%;
    }

    @include media-query(550px) {
      width: 100%;
      padding: 10px 10px 50px;
    }

    .billing-info-container {
      width: 100%;

      h3 {
        font-size: 13px;
        font-weight: 540;
        letter-spacing: 0.67px;
        word-spacing: 1px;
        line-height: 1.67;
        text-transform: uppercase;
        margin-bottom: 0.96em;
        color: rgb(172, 172, 172);
        user-select: none;
      }

      .info-container {
        width: 100%;

        form input {
          width: 100%;
          background: none;
          padding: 10px;
          letter-spacing: 0.76px;
          word-spacing: 1px;
          line-height: 1.12;
          font-size: 13px;
          font-weight: 540;
          margin: 3px 0;
          color: #031545;
        }

        form > input {
          border: 1px solid #bbb;
          padding: 12px;
          height: 42px;
          border-radius: 3px;

          &:focus-within,
          &:focus {
            box-shadow: #03154562 0.45px 0.51px 3px;
          }
        }

        form > input#email {
          text-transform: none;
        }

        form > input#country {
          cursor: default;
        }

        form {
          display: flex;
          flex-direction: column;
          align-items: flex-end;

          button {
            width: 139px;
            padding: 10px;
            border: none;
            background: none;
            margin-top: 15px;
            cursor: pointer;
            text-align: center;
            text-transform: uppercase;
            line-height: 1.45;
            letter-spacing: 0.67px;
            transition: all 250ms ease-out;
            border-radius: 3px;
            background-color: rgb(226, 226, 226);

            &:hover {
              background-color: rgba(221, 221, 221, 0.74);
            }

            @include media-query(550px) {
              width: 100%;
            }
          }
        }
      }
    }

    .details-container {
      width: 170px;
      position: absolute;
      top: 25%;
      right: -190px;
      border: 1px solid rgb(100, 175, 236);
      box-shadow: #03154560 1px 2px 3px;
      padding: 10px;
      border-radius: 3px;
      transition: all 255ms ease-in;
      opacity: 0;
      background-color: #fff;

      @include media-query(550px) {
        top: 0%;
        right: 20%;
        transform: translate(-50%, -50%);
      }
      @include media-query(400px) {
        top: 5%;
        right: 0%;
      }

      p {
        font-size: 13px;
        color: rgb(14, 73, 121);
        font-weight: 540;
        line-height: 1.47;
        letter-spacing: 0.76px;
        word-spacing: 1px;
      }
    }
  }
}

.vue-tel-input {
  width: 100%;
  margin: 3px 0;

  &:focus-within,
  &:focus {
    box-shadow: #03154562 0.45px 0.51px 3px !important;
    border-color: #bbb !important;
  }
}

.confirm-billing-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -30%);

  @include media-query(1441px, 2960px) {
    transform: translate(-50%, -70%);
  }

  @include media-query(715px) {
    transform: translate(-50%, -30%);
  }
}
</style>
