
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MeuPerfil from '@/components/MeuPerfil/MeuPerfil.vue';

const meuPerfil = createApp(MeuPerfil);

meuPerfil.use(createPinia());
meuPerfil.mount('#meuPerfil')
