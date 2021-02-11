<template>
  <v-app>
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

    <v-container>
      <v-row class="text-center" justify="center">
        <h2 class="headline font-weight-bold mb-3 align=center">
          Snackbar Buttons
        </h2>
        <v-col cols="12">
          <v-btn @click="openKendoSnackBar('Warning message!', 'warning')">Warning</v-btn>
          <v-btn @click="openKendoSnackBar('Error message!', 'error')">Error</v-btn>
          <v-btn @click="openKendoSnackBar('Info message!', 'info')">Info</v-btn>
          <v-btn @click="openKendoSnackBar('Success Message!', 'success')">Success</v-btn>
        </v-col>
      </v-row>
    </v-container>

    <div>
      <SnackBar/>
    </div>
    <div>
      <KendoSnackBar/>
    </div>
  </v-app>
  
</template>

<script>
import SnackBar from './components/SnackBar'
import {eventBusSnackBar} from './global-actions/index.js'
import {eventBusKendoSnackBar} from './global-actions/index.js'
import KendoSnackBar from './components/KendoSnackBar'

export default {
  name: 'App',

  components: {
    SnackBar,
    KendoSnackBar
  },
  methods:{
    openSnackBar: (message, color) => {
      eventBusSnackBar(message, color)
    },
    openKendoSnackBar: (message, type) => {
      eventBusKendoSnackBar(message, type)
    }
  },
};
</script>
