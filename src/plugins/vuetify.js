import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    
  theme: {
    themes: {
        light: {
            primary: '#4563E5',
            secondary: '#fff',
            anchor: '#8c9eff',
        },
    },
}
});
