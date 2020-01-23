<template>
  <v-app>
    <side-menu/>
    <router-view />
    <!-- <AboutPage/> -->
  </v-app>
</template>

<script>
import SideMenu from './components/SideMenu';

export default {
  name: 'App',

  components: {
    SideMenu
  },
  created () {
    this.$router.push({ name: 'csp'})
  },
  data: () => ({
    //
  }),
  computed: {
    layout () {
      return this.$store.state.ui.layout
    }
  }
};
</script>
