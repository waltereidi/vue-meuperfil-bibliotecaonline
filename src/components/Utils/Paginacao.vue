<script lang="ts">
    export default { 
    props: {
            quantidade: Number, 
            multiplicador: Number, 
            
    },
    data(){
        return {
            paginacaoRetorno: 1,
            arrayPaginas: [],
            paginacaoAtual:1 ,
        }
    },
    emits: ['retornaPaginacao'],
    methods: {
        retornaPaginacao() {
            this.$emits('retornaPaginacao', this.paginacaoRetorno, this.multiplicador);
        },
        proximaPagina() {
            
            this.paginacaoAtual = this.paginacaoAtual < this.arrayPaginas.length? this.paginacaoAtual+1 : this.paginacaoAtual; 
            console.log(this.paginacaoAtual , this.arrayPaginas.length);
        },
        voltarPagina() {
            this.paginacaoAtual = this.paginacaoAtual > 1 ? this.paginacaoAtual-1 : this.paginacaoAtual;
        }
    },
    beforeMount() {
        this.arrayPaginas = [];
        for (var i = 1 , k = 1; i < this.quantidade; i += this.multiplicador , k++){
            this.arrayPaginas.push(k);
        }
    },
    }
</script>
<template>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item" v-if="quantidade > multiplicador">
        <a class="page-link" @click="voltarPagina" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only"></span>
        </a>
        </li>
        <div v-for="pagina in arrayPaginas">
            <li v-if="paginacaoAtual == pagina" class="page-item active">
            <span class="page-link">
                {{pagina}}
                <span class="sr-only"></span>
            </span>
            </li>
            <li class="page-item" v-else><a class="page-link" href="#">{{ pagina }}</a></li>
        </div>

        <li class="page-item" v-if="quantidade > multiplicador">
        <a class="page-link" @click="proximaPagina" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only"></span>
        </a>
        </li>
    </ul>
    </nav>
</template>
<style scoped>
    @import "@/assets/css/Utils/paginacao.css";
</style>