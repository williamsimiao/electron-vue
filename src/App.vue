<template>
  <v-app>
    <side-menu/>
    <v-content>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-content>
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
