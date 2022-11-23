import { createApp } from 'vue/dist/vue.esm-bundler.js';
import component1 from "bundle-text:./component/test.html"
const Example = {
    template:component1
  };
  
  const app = {
    data(){
        return{
            data:"Hello This is data"
        }
    },
    components: {
      Example
    },
    template: `
      <h3>Vue 3</h3>
      {{data}}
      <Example />
    `
  };
createApp(app).mount("#app")
