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
import UserActivitySection from './components/section/UserActivitySection.vue'
import PaymentMethodSection from './components/section/PaymentMethodSection.vue';
import PurchasesSaleSection from './components/section/PurchasesSaleSection.vue';
import Collections from './components/section/Collections.vue';
import CollectionSlider from './components/common/CollectionSlider.vue';
import ExploreSection from './components/section/ExploreSection.vue';
import HowItSection from './components/section/HowItSection.vue';
import LogoLink from './components/common/LogoLink.vue';

// Global page components register
app.component('HeaderMain', HeaderMain);
app.component('ButtonGroup', ButtonGroup)
app.component('Footer', Footer)
app.component('FooterSection', FooterSection)
app.component('LoginSection', LoginSection)
app.component('RegisterSection', RegisterSection)
app.component('UserActivitySection', UserActivitySection)
app.component('PaymentMethodSection', PaymentMethodSection)
app.component('PurchasesSaleSection', PurchasesSaleSection)
app.component('Collections', Collections)
app.component('CollectionSlider', CollectionSlider)
app.component('ExploreSection', ExploreSection)
app.component('HowItSection', HowItSection)
app.component('LogoLink', LogoLink)

// vue app
app.use(router).mount('#app')
