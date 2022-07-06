import './bootstrap';

import { createApp } from 'vue/dist/vue.esm-bundler.js';
import router from '@/components/routes'
import RootComponent from '@/components/RootComponent.vue';

const app = createApp({
    components: {
        RootComponent
    }
})

app.use(router).mount('#app')
