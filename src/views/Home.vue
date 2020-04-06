<template>
  <fragment>
    <banner-component />
    <software-list-component />
  </fragment>
</template>

<script>
// @ is an alias to /src
import { Fragment } from 'vue-fragment';
import BannerComponent from '@/components/BannerComponent';
import SoftwareListComponent from '@/components/SoftwareListComponent.vue';

export default {
  name: 'Home',
  components: {
    fragment: Fragment,
    'banner-component': BannerComponent,
    'software-list-component': SoftwareListComponent,
  },
};
</script>
