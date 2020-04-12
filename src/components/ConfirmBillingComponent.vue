<template>
  <fragment>
    <div id="header">
      <header-component />
    </div>
    <div class="confirm-billing-container modal">
      <div class="confirm-billing-wrapper">
        <h3 id="title">verify &amp; confirm payments</h3>
        <form action="" method="post" @submit.prevent="generatePayment">
          <div class="confirm-billing grid-container">
            <div class="client-details">
              <h3>your details</h3>
              <div class="form-control flex-container">
                <label for="name">Name</label>
                <input readonly id="name" name="name" :value="$route.query.name" />
              </div>
              <div class="form-control flex-container">
                <label for="email">email</label>
                <input readonly id="email" name="email" :value="$route.query.email" />
              </div>
              <div class="form-control flex-container">
                <label for="address">address</label>
                <input readonly id="address" name="address" :value="$route.query.address" />
              </div>
              <div class="form-control flex-container">
                <label for="phone">phone</label>
                <input readonly id="phone" name="mobile" :value="'+' + $route.query.dialCode + ' ' + $route.query.phone" />
              </div>
              <div class="form-control flex-container">
                <label for="country">country</label>
                <input readonly id="country" name="country" :value="$route.query.country" />
              </div>
            </div>
            <div class="license-details">
              <h3>license</h3>
              <div class="form-control flex-container">
                <label for="duration">duration</label>
                <input readonly id="duration" :value="$route.query.duration + ' days'" />
              </div>
              <div class="form-control flex-container">
                <label for="price">price</label>
                <input readonly id="price" :value="'$' + $route.query.price" />
              </div>
              <div class="form-control flex-container">
                <label for="currency">currency</label>
                <input readonly id="currency" name="currency" :value="$route.query.currency" />
              </div>
              <div class="form-control flex-container">
                <label for="type">type</label>
                <input readonly id="type" :value="$route.query.type" />
              </div>
              <input type="hidden" name="license" :value="$route.params.license_id" />
              <input type="hidden" name="software" :value="$route.params.software_id" />
            </div>
          </div>
          <div class="btn-container flex-container">
            <button type="submit">confirm and pay</button>
            <router-link :to="{ path: `/software/${$route.params.software_id}` }">cancel</router-link>
          </div>
        </form>
      </div>
    </div>
  </fragment>
</template>

<script>
import axios from '../api/axios';
import { bus } from '../main';
import HeaderComponent from '@/components/HeaderComponent';
import { Fragment } from 'vue-fragment';

export default {
  name: 'ConfirmBilling',
  components: {
    'header-component': HeaderComponent,
    fragment: Fragment
  },
  data() {
    return {
      //
    };
  },
  methods: {
    generatePayment() {
      bus.$emit('toggleLoading');
      const data = { license: this.$route.params.license_id, software: this.$route.params.software_id, amount: this.$route.query.price, currency: this.$route.query.currency, name: this.$route.query.name, email: this.$route.query.email, address: this.$route.query.address, mobile: `+${this.$route.query.dialCode} ${this.$route.query.phone}`, country: this.$route.query.iso2 };
      // initialize payment
      try {
        axios
          .post('api/orders', data)
          .then(response => {
            const data = response.data;
            // success in order request
            try {
              // request fluterwave payment
              const x = window.getpaidSetup({
                PBFPubKey: data.flutterwave_public_key,
                customer_email: data.data.email,
                amount: data.data.amount,
                customer_phone: data.data.mobile,
                currency: data.data.currency,
                txref: data.data.reference,
                onclose: () => {
                  bus.$emit('toggleLoading');
                },
                callback: response => {
                  console.log(response);
                  // const txref = response.tx.txRef;
                  if (response.respcode === '00' || response.respcode === '0') {
                    // successful transaction
                    try {
                      // update server order
                      axios
                        .put(`api/orders/${data.data.id}`, { payment_response: response })
                        .then(response => {
                          return this.$router.replace({ path: `/software/payment/${response.data.data.id}`, query: { amount: response.data.data.amount, currency: response.data.data.currency, name: response.data.data.name, email: response.data.data.email, reference: response.data.data.reference } });
                        })
                        .catch(error => {
                          console.log('catch in update catch block');
                          console.log(error);
                          if (error.response) {
                            return bus.$emit('popup', { success: false, msg: error.response.data.error });
                          }
                        });
                    } catch (error) {
                      console.log('trycatch in update catch block');
                      console.log(error);
                      // failed update order
                      return bus.$emit('popup', { success: false, msg: 'Request failed' });
                    }
                  } else {
                    // failed transaction
                    console.log('catch in else block');
                    console.log(response);
                    return bus.$emit('popup', { success: false, msg: 'Request failed' });
                  }
                  x.close();
                }
              });
            } catch (error) {
              console.log('trycatch in flutter catch block');
              console.log(error);
              if (error) {
                bus.$emit('toggleLoading');
                return bus.$emit('popup', { success: false, msg: 'Request failed' });
              }
            }
          })
          .catch(error => {
            if (error.response) {
              const errors = error.response.data.error;
              let data = [];
              for (error in errors) {
                data.push({ msg: `${error}: ${errors[error][0]}` });
              }
              data.push({ success: false });
              bus.$emit('toggleLoading');
              return bus.$emit('popup', data);
            }
            bus.$emit('toggleLoading');
            return bus.$emit('popup', { success: false, msg: 'Network Error' });
          });
      } catch (error) {
        console.log('trycatch in request order catch block');
        console.log(error);
        bus.$emit('toggleLoading');
        return bus.$emit('popup', { success: false, msg: 'Request failed' });
      }
    }
  },
  mounted() {
    let flutterwaveScript = document.createElement('script');
    flutterwaveScript.setAttribute('src', process.env.NODE_ENV === 'production' ? process.env.VUE_APP_PRO_SCRIPT_URL : process.env.VUE_APP_DEV_SCRIPT_URL);
    flutterwaveScript.setAttribute('type', 'text/javascript');
    document.head.appendChild(flutterwaveScript);
  }
};
</script>

<style lang="scss">
@import '../scss/_mixins';

.confirm-billing-container {
  background-color: #fff;
  box-shadow: rgba(37, 1, 44, 0.822) 0.43px 1px 3px;
  padding: 30px;
  width: 677px;
  margin: 60px auto;
  border-radius: 3px;

  @include media-query(715px) {
    width: 80%;
    margin: 30px auto;
  }

  @include media-query(665px) {
    padding: 15px;
    width: 95%;
  }
  .confirm-billing-wrapper {
    position: relative;
  }

  h3 {
    font-size: 13px;
    font-weight: 560;
    letter-spacing: 0.67px;
    word-spacing: 1px;
    line-height: 1.67;
    text-transform: uppercase;
    margin-bottom: 0.36em;
    color: rgb(48, 26, 148);
    user-select: none;
    text-align: center;
  }
  h3#title {
    margin-bottom: 1.36em;
  }

  .grid-container {
    width: 100%;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 50%);

    @include media-query(715px) {
      grid-template-columns: repeat(1, 100%);

      & > div {
        width: 100% !important;
      }
    }

    & > div {
      width: 88%;
      margin: 0 auto;

      &:first-child {
        width: 100%;
      }
    }

    .form-control {
      width: 100%;
      align-items: center;
      justify-content: space-between;

      label {
        font-size: 10px;
        font-weight: 540;
        letter-spacing: 0.67px;
        word-spacing: 1px;
        text-transform: uppercase;
        color: rgb(102, 98, 98);
        user-select: none;
        margin-right: 5px;
        padding: 10px;
        box-sizing: border-box;
        width: 110px;
      }

      input {
        width: 100%;
        padding: 7px 10px;
        font-size: 14px;
        color: #325;
        font-weight: 600;
        border: none;
        background: none;
        box-sizing: border-box;
      }

      @include media-query(715px) {
        & > label {
          width: 47% !important;
          text-align: end;
          margin-right: 0;
        }
        & > input {
          width: 53% !important;
          text-align: start;
          padding-left: 5px;
        }
      }
      @include media-query(420px) {
        & > label {
          width: 27% !important;
        }
        & > input {
          width: 73% !important;
        }
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .btn-container {
    margin: 2.67em 0 0;

    @include media-query(550px) {
      flex-wrap: wrap;
    }

    button,
    a {
      display: inline-block;
      padding: 10px;
      border: none;
      background: none;
      cursor: pointer;
      text-align: center;
      text-transform: uppercase;
      color: rgb(245, 245, 245);
      font-weight: 560;
      line-height: 1.45;
      letter-spacing: 0.67px;
      transition: all 250ms ease-out;
      border-radius: 3px;
      background-color: rgb(9, 141, 145);

      &:hover {
        background-color: rgba(9, 141, 145, 0.74);
      }

      @include media-query(550px) {
        width: 100%;
      }
    }

    a {
      margin-left: 20px;
      font-size: 14px;
      background-color: rgba(194, 11, 11, 0.945);

      @include media-query(550px) {
        margin: 10px 0 0;
      }

      &:hover {
        background-color: rgba(231, 22, 22, 0.945);
      }
    }
  }

  .close {
    position: absolute;
    border: none;
    background: none;
    font-size: 14px;
    font-weight: 600;
    top: 0;
    right: 0;
    padding: 5px;
    cursor: pointer;

    &:active {
      color: rgb(235, 4, 4);
    }
  }
}
</style>
