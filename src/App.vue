<template>
  <v-app>
    <AboutPage/>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import AboutPage from './pages/AboutPages/AboutPage';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    AboutPage
  },

  data: () => ({
    //
  }),
};
</script>
