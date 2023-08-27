import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import EditarMeuPerfil from '@/components/EditarMeuPerfil/EditarMeuPerfil.vue';

const editarMeuPerfil = createApp(EditarMeuPerfil);

editarMeuPerfil.use(createPinia());
editarMeuPerfil.mount('#editarMeuPerfil');
