<template>
  <div class="software-container">
    <div class="header">
      <header-component id="header-component" />
    </div>
    <div class="software-wrapper">
      <div class="software">
        <!-- app description -->
        <div class="app-details flex-container">
          <div class="details">
            <div class="header">
              <h3>Lorem ipsum dolor</h3>
              <span>version 1.0</span>
            </div>
            <div class="app-description">
              <h3>Lorem, ipsum dolor.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, beatae?</p>
            </div>
          </div>
          <div class="ext-details">
            <div class="ext-container">
              <ul>
                <li>
                  <a href="#">links</a>
                </li>
                <li>
                  <a href="#">links</a>
                </li>
              </ul>
            </div>
            <div class="author-container">
              <p>
                name:
                <span>vegas cedric</span>
              </p>
              <p>
                website:
                <span>www.example.com</span>
              </p>
              <p>
                email:
                <span>example@example.com</span>
              </p>
              <p>
                mobile:
                <span>6xx xxx xxx</span>
              </p>
            </div>
          </div>
        </div>
        <!-- youtube iframe -->
        <div class="youtube-container">
          <iframe src="https://www.youtube.com/embed/t2ByLmLnYJ8" width="100%" height="450px" frameborder="0" class="youtube" allowfullscreen></iframe>
        </div>
        <!-- licences payment -->
        <div class="license-container flex-container">
          <div class="purchase-license">
            <form action method="post">
              <input readonly type="text" name="type" id="type" value="Monthly billing" />
              <input readonly type="text" name="price" id="price" value="$10.00" />
              <input readonly type="text" name="currency" id="currency" value="USD" />
              <input readonly type="text" name="duration" id="duration" value="30 days" />
              <button type="submit">buy license</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- <footer-component /> -->
  </div>
</template>

<script>
import HeaderComponent from './HeaderComponent';
// import FooterComponent from "./FooterComponent";

export default {
  name: 'Software',
  components: {
    'header-component': HeaderComponent,
    // "footer-component": FooterComponent
  },
};
</script>

<style lang="scss">
.software-container > .header {
  width: 100%;
  background-color: #031545;
}

.software-wrapper {
  width: 80%;
  margin: 50px auto;
}
</style>
