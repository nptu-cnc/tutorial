import { createApp } from 'vue/dist/vue.esm-bundler.js';
import component1 from "bundle-text:./component/test.html"
const Example = {
  template: component1
};

const app = {
  data() {
    return {
      data: "Hello This is data"
    }
  }
}

createApp(app).mount("#app")
