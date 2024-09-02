// plugins/fontawesome.js
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// Add all icons to the library so you can use them in your page
library.add(fas, fab)

Vue.component('font-awesome-icon', FontAwesomeIcon)
