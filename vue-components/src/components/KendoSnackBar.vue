<template>
    <k-notification ref="popupNotification" :autoHideAfter=-1 position.fixed></k-notification>
</template>

<script>

import { Notification } from "@progress/kendo-popups-vue-wrapper";
import EventBus, { ACTIONS } from '../event-bus';
export default {
    components: {
    'k-notification': Notification
    },
    methods: {
        showNotification(message, type){
            this.popupNotificationWidget.show(message, type);
        },
        onClick(){
            this.popupNotificationWidget.close();
        },
        getHeight(){
            return this.$refs.popupNotification.getHeight()
        }
    },
    mounted(){
        this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget();
        EventBus.$on(ACTIONS.KENDOSNACKBAR, (message, type) => {
            this.showNotification(message, type)
        })
    }
}
</script>