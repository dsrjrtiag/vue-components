<template>
    <!-- 1 timeount means no timeout, stays indefinitely -->
    <v-snackbar
        v-model="snackBarOn"
        :color="color"
        timeout=-1
        
        >
        <v-icon
            dark
            left
            v-if="icon.length > 0">
            {{ icon }}
        </v-icon>
        {{message}}
        <template v-slot:action="{attrs}">
            <v-btn
                text
                v-bind="attrs"
                @click="close">
                Close
            </v-btn>
        </template>
    </v-snackbar>
</template>

<script>
import EventBus, {ACTIONS} from '../event-bus';

export default {
    data: () => ({
        snackBarOn: false,
        icon: '',
        message: '',
        color: "normal"
    }),
    methods: {
        show(message, color){
            if(this.snackBarOn){
                this.close()
                this.$nextTick(() => this.show(message, color))
                return
            }

            this.message = message;
            this.color = color;
            this.snackBarOn = true;
        },
        close(){
            this.snackBarOn = false;
        }
    },
    mounted(){
        EventBus.$on(ACTIONS.SNACKBAR, (message, color) => {
            this.show(message, color);
    })
  }
}
</script>