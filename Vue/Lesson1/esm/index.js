import { createApp } from '../node_modules/vue/dist/vue.esm-browser.js';
let data = {
    data() {
        return {
            hello: "Hi this is esm import"
        }
    }
}

createApp(data).mount("#app")