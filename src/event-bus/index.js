import Vue from 'vue';

export const ACTIONS = {
  SNACKBAR: 'snackbar',
  KENDOSNACKBAR: 'kendoSnackBar',
};

const EventBus = new Vue();

export default EventBus;