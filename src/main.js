import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// vue app
const app = createApp(App);

// bootstrap
import "bootstrap"
// vue select
import vSelect from 'vue-select'
import "vue-select/dist/vue-select.css";

app.component('v-select', vSelect)

// clipboard
import VueClipboard from 'vue3-clipboard'
app.use(VueClipboard, {
    autoSetContainer: true,
    appendToBody: true,
})

// template custom css
import './assets/scss/bundles.scss'
import './assets/scss/style.scss'



// Global page components imported
import HeaderMain from './components/common/HeaderMain.vue';
import ButtonGroup from './components/common/ButtonGroup.vue';
import Footer from './pages/Footer.vue';
import FooterSection from './components/section/FooterSection.vue';
import LoginSection from './components/section/LoginSection.vue';
import RegisterSection from './components/section/RegisterSection.vue';



// Global page components register
app.component('HeaderMain', HeaderMain);
app.component('ButtonGroup', ButtonGroup)
app.component('Footer', Footer)
app.component('FooterSection', FooterSection)
app.component('LoginSection', LoginSection)
app.component('RegisterSection', RegisterSection)

// vue app
app.use(router).mount('#app')
