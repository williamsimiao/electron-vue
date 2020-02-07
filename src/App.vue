<template>
  <v-app>
    <v-content>
      <v-row>
        <v-col cols="3">
          <side-menu/>
        </v-col>
        <v-col cols="9">
          <router-view />
        </v-col>
      </v-row>
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
    this.$router.push({ name: 'about'})
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
