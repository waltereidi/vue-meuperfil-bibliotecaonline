<script lang="ts">
import MeuPerfilDataSource from "@/assets/json/meuperfildatasource.json";
import LivrosMeuPerfil from "@/components/MeuPerfil/LivrosMeuPerfil.vue";

export default { 
    data() {
        return {
                meuPerfilDataSource: MeuPerfilDataSource, 
            }
    },
    components: {
            LivrosMeuPerfil
        }
    }
</script>

<template>
    <section class="h-100 gradient-custom-2">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-9 col-xl-7">
            <div class="card">
              <div class="rounded-top text-white d-flex flex-row" style="background-color: #000; height:200px;">
                <div class="ms-4 mt-5 d-flex flex-column" style="width: 150px;">
                  <img :src="meuPerfilDataSource.profile_picture"
                    alt="Generic placeholder image" class="img-fluid img-thumbnail mt-4 mb-2"
                    style="width: 150px; z-index: 1">
                  
                </div>
                <div class="ms-3" style="margin-top: 130px;">
                  <h5>{{meuPerfilDataSource.nome}}</h5>
                </div>
              </div>
              <div class="p-4 text-black" style="background-color: #f8f9fa;">
                <div class="d-flex justify-content-end text-center py-1">
                  <div v-if="meuPerfilDataSource.livrosdoperfil > 0 ">
                    <p class="mb-1 h5">{{ meuPerfilDataSource.livrosdoperfil  }}</p>
                    <p class="small text-muted mb-0">Livros do perfil</p>
                  </div>
                  <div class="px-3" v-if="meuPerfilDataSource.livrosentregues > 0">
                    <p class="mb-1 h5">{{ meuPerfilDataSource.livrosentregues}}</p>
                    <p class="small text-muted mb-0">Livros entregues</p>
                  </div>
                  <div v-if="meuPerfilDataSource.livrosrecebidos > 0">
                    <p class="mb-1 h5">{{ meuPerfilDataSource.livrosrecebidos }}</p>
                    <p class="small text-muted mb-0">Livros recebidos</p>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 text-black">
                <div class="mb-5">
                  <p class="lead fw-normal mb-1">Introdução</p>
                  <div class="p-4" style="background-color: #f8f9fa;">
                   <p>{{ meuPerfilDataSource.introducao }}</p>
                  </div>
                </div>
                    <LivrosMeuPerfil :nome="meuPerfilDataSource.nome"></LivrosMeuPerfil> 

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>