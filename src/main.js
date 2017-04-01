// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/

// Import App Custom Styles
import AppStyles from './css/app.css'
import HelpersStyles from './css/helpers.css'
import Icons from './css/framework7-icons.css'
import FontAwesomeIcons from './css/font-awesome.css'

import cleave from "cleave.js"
import cleaveDo from "cleave.js/src/addons/phone-type-formatter.do"

import axios from "axios"

window.axios = axios;
window.api = "http://localhost:8081";

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'

// Init F7 Vue Plugin
Vue.use(Framework7Vue)
Vue.config.productionTip = false;


let framework7 = {
    root: '#app',

    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
}

// Init App
new Vue({
    el: '#app',
    template: '<app/>',
    // Init Framework7 by passing parameters here
    framework7
    ,
    // Register App Component
    components: {
        app: App,
    }
});