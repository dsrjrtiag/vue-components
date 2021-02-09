<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <HelloWorld/>
    </v-main>

    <v-container>
      <v-row class="text-center" justify="center">
        <h2 class="headline font-weight-bold mb-3 align=center">
          Snackbar Buttons
        </h2>
        <v-col cols="12">
          <v-btn @click="openSnackBar('Warning message!', 'warning')">Warning</v-btn>
          <v-btn @click="openSnackBar('Error message!', 'error')">Error</v-btn>
          <v-btn @click="openSnackBar('Info message!', 'info')">Info</v-btn>
          <v-btn @click="openSnackBar('Success message!', 'success')">Success</v-btn>
        </v-col>
      </v-row>
    </v-container>
    
    <div>
      <SnackBar/>
    </div>
  </v-app>
  
</template>

<script>
import HelloWorld from './components/HelloWorld'
import SnackBar from './components/SnackBar'
import {eventBusSnackBar} from './global-actions/index.js';

export default {
  name: 'App',

  components: {
    HelloWorld,
    SnackBar
  },
  methods:{
    openSnackBar: (message, color) => {
      eventBusSnackBar(message, color)
    },
  },
};
</script>
