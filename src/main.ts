
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import MeuPerfil from '@/components/MeuPerfil/MeuPerfil.vue';
import EditarMeuPerfil from "@/components/EditarMeuPerfil/EditarMeuPerfil.vue";
import Livros from "@/components/Livros/Livros.vue";


const meuPerfil = createApp(MeuPerfil);

meuPerfil.use(createPinia());
meuPerfil.mount('#meuPerfil');

const editarMeuPerfil = createApp(EditarMeuPerfil);
editarMeuPerfil.use(createPinia());
editarMeuPerfil.mount("#editarMeuPerfil"); 

const livros = createApp(Livros);
livros.use(createPinia());
livros.mount("#livros");
