import { createStore } from 'vuex'
import auth from './auth';
import baseurl from './baseurl';
export default createStore({
    modules: { auth, baseurl }
})