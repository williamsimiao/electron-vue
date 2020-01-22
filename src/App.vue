<template>
  <v-app>
    <side-menu/>
    <AboutPage/>
  </v-app>
</template>

<script>
import AboutPage from './pages/AboutPages/AboutPage';
import SideMenu from './components/SideMenu';

export default {
  name: 'App',

  components: {
    SideMenu,
    AboutPage
  },

  data: () => ({
    //
  }),
};
</script>
