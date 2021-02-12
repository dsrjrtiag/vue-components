import EventBus, { ACTIONS } from '../event-bus/index';

export const eventBusSnackBar = (message, color) => {
  EventBus.$emit(ACTIONS.SNACKBAR, message, color);
};

export const eventBusKendoSnackBar = (message, type) => {
  EventBus.$emit(ACTIONS.KENDOSNACKBAR, message, type);
}