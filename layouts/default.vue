<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      dark
      color="primary"
      :fixed="fixed"
    >
      <v-toolbar-title>DataJam</v-toolbar-title>
     
    </v-app-bar>
    

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer
      :absolute="!fixed"
      class="justify-center"
      app

    >
      <span align="center" justify="center">&copy; DataJam - {{ new Date().getFullYear() }}   <p class="love">Made with ❤️ by <a href="https://github.com/Sarveshk76">Sarveshk76</a></p></span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
