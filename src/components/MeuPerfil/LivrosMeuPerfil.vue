<script lang="ts">
import BibliotecaConfig from "@/assets/json/bibliotecaconfig.json";
import Paginacao from "@/components/Utils/Paginacao.vue";
import LivrosDoPerfilDataSource from "@/assets/json/livrosdoperfil.json";

export default {
    props: {
        nome: String, 
        
    },
    data() {
        return { 
            countLivros: 0,
            bibliotecaConfigDataSource: BibliotecaConfig, 
            livrosDoPerfilDataSource : LivrosDoPerfilDataSource ,
        }
    },    
    methods: { 
        childRetornaPaginacao(paginacao, quantidade) { 
            
        }
    },
    components:{
        Paginacao,
    }
}
</script>
<template>
      <div class="d-flex justify-content-between align-items-center mb-4" >
                      <p class="lead fw-normal mb-0">Livros de {{ nome }}</p>
                      <Paginacao :quantidade="40"
                       :multiplicador="5"
                       :limitePaginacao="8"
                       :travarPaginacao="false"
                       @retornaPaginacao="childRetornaPaginacao"></Paginacao>
                    </div>
                    <div v-for="( livro) in livrosDoPerfilDataSource" >
                        
                            <div class="container" id="quadrante">
                                <div class="row">
                                <div class="col-md-6" id="quadranteImagem">
                                        <img  :src="livro.capalivro ?? bibliotecaConfigDataSource.capaLivroDefault"
                                                alt="image 1" class="w-100 rounded-3">
                                </div>
                                <div class="col-md-6" id="quadranteInformacoes">
                                    <div class="row">
                                    <div class="col-md-6">
                                            <p class="cabecalho"><strong>Titulo: </strong> <a :href="'/livros/'+livro.id">{{ livro.titulo }}</a></p>
                                            <p class="cabecalho"><strong>ISBN: </strong> {{ livro.isbn }} </p>
                                            <p class="cabecalho"><strong>Autor: </strong> {{ livro.autores_nome }}</p>
                                            <p class="cabecalho"><strong>Editora: </strong>{{ livro.editoras_nome }}</p>
                                    </div>
                                    <div class="col-md-6" id="quadranteDescricao">
                                             <blockquote class="blockquote">
                                                    <p class="text-left" id="descricao">{{(livro.descricao.length > 200)? livro.descricao.substring(0, 200)+'...':livro.descricao}}</p>
                                             </blockquote>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <br>
                    </div>
         
</template>
<style>
@import "@/assets/css/MeuPerfil/livrosMeuPerfil.css";
</style>