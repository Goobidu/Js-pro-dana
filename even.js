const App = {
    data() {
        return {

            message: "Kobyla ma maly bok"
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
                .split("")
                .reverse()
                .join("")
        }
    },
    methods: {
        lowerandhigherCase() {
            if (this.message = this.message.toUpperCase()) {
                this.messgae = this.message
                    .toLowerCase()
            } else if (this.message = this.message.toLowerCase()) {
                this.message = this.message
                    .toUpperCase()
            }

        }
    }
}

Vue.createApp(App).mount("#app")