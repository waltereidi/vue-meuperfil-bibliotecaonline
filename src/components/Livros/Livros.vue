<script lang="ts">
import config from "@/assets/json/bibliotecaconfig.json"

export default {
    data() {
        return {
            configDataSource: config,

        }
    }
}
</script>
<template>
    <div class="header"></div>
    <div class="container">

        <div class="container container--left">
            <img class="rounded mx-auto d-block" :src="configDataSource.capaLivroDefault" alt="capa do livro">

        </div>
        <div class="container container--right">
            <div class="container container--descricao">
                <div class="livro-titulo">
                    <h3>Livro Titulo</h3>

                    <p>Edição gênero
                        <span class="pipeLineSeparator">|</span>
                        Por Autor
                    </p>

                </div>
                <hr>


                <details>

                    <summary>Leia mais...
                        <blockquote>
                            "Principles: Life and Work" é um livro escrito por Ray Dalio, um renomado investidor, empresário
                            e
                            fundador da Bridgewater Associates, uma das maiores empresas de hedge funds do mundo. O livro
                            explora os
                            princípios que Dalio desenvolveu ao longo de sua carreira para alcançar o sucesso nos negócios e
                            na
                            vida.
                        </blockquote>

                    </summary>
                    "Principles: Life and Work" é um livro escrito por Ray Dalio, um renomado investidor, empresário e
                    fundador da Bridgewater Associates, uma das maiores empresas de hedge funds do mundo. O livro explora os
                    princípios que Dalio desenvolveu ao longo de sua carreira para alcançar o sucesso nos negócios e na
                    vida.

                    Dalio compartilha insights valiosos sobre como tomar decisões eficazes, construir equipes de alto
                    desempenho e criar uma cultura organizacional que valorize a honestidade e a transparência. Ele descreve
                    suas próprias experiências e os desafios que enfrentou ao longo do caminho, usando exemplos concretos
                    para ilustrar seus princípios.

                    O livro é conhecido por seu foco na importância da reflexão, do aprendizado contínuo e da busca da
                    verdade. Ele oferece orientações práticas que podem ser aplicadas tanto no mundo dos negócios quanto na
                    vida pessoal, tornando-o uma leitura valiosa para quem busca o autodesenvolvimento e o sucesso em
                    diversas áreas.

                    Lembre-se de que esta é apenas uma breve descrição do livro. Se você deseja uma descrição mais detalhada
                    ou precisa de informações específicas do livro para um projeto ou pesquisa, sugiro adquirir o livro ou
                    procurar fontes adicionais para obter informações mais abrangentes.
                    maiores empresas de hedge funds do mundo. O livro explora os princípios que Dalio desenvolveu ao longo
                    de sua carreira para alcançar o sucesso nos negócios e na vida.

                    Dalio compartilha insights valiosos sobre como tomar decisões eficazes, construir equipes de alto
                    desempenho e criar uma cultura organizacional que valorize a honestidade e a transparência. Ele descreve
                    suas próprias experiências e os desafios que enfrentou ao longo do caminho, usando exemplos concretos
                    para ilustrar seus princípios.

                    O livro é conhecido por seu foco na importância da reflexão, do aprendizado contínuo e da busca da
                    verdade. Ele oferece orientações práticas que podem ser aplicadas tanto no mundo dos negócios quanto na
                    vida pessoa
                </details>
            </div>
            <div class="container container--informacao ">
                <div class="container container--content border rounded">
                    sd
                </div>
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
