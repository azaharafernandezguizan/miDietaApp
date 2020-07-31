import Welcome from './components/Welcome.vue';
import Menu from './components/Menu.vue';
import CreateMenu from './components/CreateMenu.vue'

export const routes = [
    { path: '/', component : Welcome },
    { path: '/menu', component : Menu },
    { path: '/newMenu', component : CreateMenu },

];