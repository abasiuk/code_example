// https://reposhub.com/vuejs/Overlay-modal-alert-dialog-lightbox-popup/euvl-vue-js-modal.html
// https://www.npmjs.com/package/vue-js-modal
// Pay attention to the version in package.json!!
import Vue from 'vue'
import VModal from 'vue-js-modal'

Vue.use(VModal, { dialog: true, dynamic: true, injectModalsContainer: true })
