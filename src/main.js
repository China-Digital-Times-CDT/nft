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
import { createI18n } from 'vue-i18n'
import messages from "@/store/store.js";

app.component('v-select', vSelect)
// const messages = {
//     en: {
//         message: {
//             hello: 'hello world'
//         }
//     },
//     ja: {
//         message: {
//             hello: 'こんにちは、世界'
//         }
//     }
// }

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages
})


// Object.defineProperty(createApp.prototype, '$locale', {
//     get: function () {
//         return app.i18n.locale
//     },
//     set: function (locale) {
//         app.i18n.locale = locale
//     }
// })
// clipboard
import VueClipboard from 'vue3-clipboard'
// const cors = require('cors');
// const corsConfig = {
//     credentials: true,
//     origin: true,
// };
// app.use(cors(corsConfig));
//app.component('vue-confirm-dialog', VueConfirmDialog.default)
app.use(i18n)
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
import UserSidebar from './components/common/UserSidebar.vue';
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
import ProfileSection from './components/section/ProfileSection.vue';
import WalletSection from './components/section/WalletSection.vue';
import CollectionSection from './components/section/CollectionSection.vue';
import InvitationsSection from './components/section/InvitationsSection.vue';
import SettingsSection from './components/section/SettingsSection.vue';

// Global page components register
app.component('HeaderMain', HeaderMain);
app.component('ButtonGroup', ButtonGroup)
app.component('UserSidebar', UserSidebar)

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
app.component('ProfileSection', ProfileSection)
app.component('WalletSection', WalletSection)
app.component('CollectionSection', CollectionSection)
app.component('InvitationsSection', InvitationsSection)
app.component('SettingsSection', SettingsSection)

// vue app
app.use(router).mount('#app')
