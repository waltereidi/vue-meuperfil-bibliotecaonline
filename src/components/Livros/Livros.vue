<script lang="ts">
import config from "@/assets/json/bibliotecaconfig.json";
import LivroDataSource from "@/assets/json/livroDataSource.json";

export default {
    props: {
        dataSource: {
            type: Object,
            required: true,
        }
    },
    data() {
        return {
            configDataSource: config,
            livroDataSource: LivroDataSource,
            downloadIcon: '',

        }
    },
    mounted() {
        if (/drive\.google/.test(this.livroDataSource.urldownload)) {
            this.downloadIcon = 'src\\assets\\icons\\icons8-google-drive.svg';
        } else if (/1drv\.ms/.test(this.livroDataSource.urldownload)) {
            this.downloadIcon = 'src\\assets\\icons\\icons8-onedrive.svg';
        } else if (/dropbox/.test(this.livroDataSource.urldownload)) {
            this.downloadIcon = 'src\\assets\\icons\\icons8-dropbox.svg';
        } else {
            this.downloadIcon = '';
        }
    }
}
</script>
<template>
    <div class="header"></div>
    <div class="container">

        <div class="container container--left">
            <img class="rounded mx-auto d-block" :src="livroDataSource.capalivro ?? configDataSource.capaLivroDefault"
                alt="capa do livro">

        </div>
        <div class="container container--right">
            <div class="container container--descricao">
                <div class="livro-titulo">
                    <h3>{{ livroDataSource.titulo }}</h3>

                    <p> <span v-if="livroDataSource.idioma.length > 0">Edição {{ livroDataSource.idioma }}
                            <span class="pipeLineSeparator">|</span></span>
                        Por {{ livroDataSource.autores_nome }}
                    </p>

                </div>
                <br><br>
                <hr>


                <details v-if="livroDataSource.descricao.length > 400">

                    <summary>Leia mais...
                        <blockquote>
                            {{ livroDataSource.descricao.substring(0, 400) }}<span>...</span>
                        </blockquote>

                    </summary>
                    {{ livroDataSource.descricao }}
                </details>

                <blockquote v-else>
                    {{ livroDataSource.descricao }}
                </blockquote>
            </div>
            <div class="container container--informacao ">
                <div class="containerInformacao border rounded">
                    <div class="containerInformacao--item">Autor
                        <div class="containerInformacao--itemDescricao">{{ livroDataSource.autores_nome }}</div>
                    </div>
                    <div class="containerInformacao--item">Editora
                        <div class="containerInformacao--itemDescricao">{{ livroDataSource.editoras_nome }}</div>
                    </div>
                    <div class="containerInformacao--item">ISBN
                        <div class="containerInformacao--itemDescricao">{{ livroDataSource.isbn }}</div>
                    </div>
                    <div class="containerInformacao--item">Gênero
                        <div class="containerInformacao--itemDescricao">{{ livroDataSource.genero }}</div>
                    </div>
                    <div class="containerInformacao--item-last">Idioma
                        <div class="containerInformacao--itemDescricao containerInformacao--itemDescricao__last">{{
                            livroDataSource.idioma }}</div>
                    </div>
                </div>
            </div>
            <br>
            <div class="container--download">
                <div class="container--header">Download</div>

                <a :href="livroDataSource.urldownload" target="_blank"><img v-if="downloadIcon" :src="this.downloadIcon"
                        alt="download">
                    <p>{{ livroDataSource.urldownload }}</p>
                </a>
            </div>
        </div>


    </div>
    <div class="footer">
        sd
    </div>
</template>
<style scoped>
@import "@/assets/scss/MeuPerfil/livros.scss";
</style>
