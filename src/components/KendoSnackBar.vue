<template>
    <k-notification ref="popupNotification" 
        :autoHideAfter=-1 
        position.fixed
        :position-left = "center"
        :width = "350"
        button="true"
    ></k-notification>
</template>

<script>

import { Notification } from "@progress/kendo-popups-vue-wrapper"
import EventBus, { ACTIONS } from '../event-bus'

export default {
    data: () => ({
        center: document.body.clientWidth / 2 - 175,
        visible: false
    }),
    components: {
    'k-notification': Notification
    },
    methods: {
        showNotification(message, type){
            if(this.visible){
                this.close()
                this.$nextTick(() => this.showNotification(message, type))
                return
            }
            this.popupNotificationWidget.show(message, type)
            this.visible = true
        },
        close(){
            this.popupNotificationWidget.hide()
            this.visible = false
        }
    },
    mounted(){
        this.popupNotificationWidget = this.$refs.popupNotification.kendoWidget()
        EventBus.$on(ACTIONS.KENDOSNACKBAR, (message, type) => {
            this.showNotification(message, type)
        })
    }
}
</script>