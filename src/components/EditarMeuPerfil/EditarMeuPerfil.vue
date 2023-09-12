<script lang="ts">
import { useVuelidate } from '@vuelidate/core';
import { url } from '@vuelidate/validators';

export default {
    setup() {
        return {
            v$: useVuelidate()
        }
    },
    data() {
        return {
            dataSource: {
                datanascimento: '',
                profile_picture: '',
                introducao: '',

            }
        }
    },
    validations() {
        return {
            dataSource: {
                profile_picture: { url },
            }
        }
    }
}
</script>

<template>
    <div class="container">

        <div class="container--imagem">
            <img v-if="!v$.dataSource.profile_picture.$invalid" :src="dataSource.profile_picture">
        </div>

        <div class="container--editar">
            <div class="container--input">
                <label class="mdc-text-field mdc-text-field--filled mdc-text-field--label-floating">
                    <span class="mdc-text-field__ripple"></span>
                    <span class="mdc-floating-label mdc-floating-label--float-above">
                        <span
                            :class="{ 'errorLabel': v$.dataSource.profile_picture.$invalid, '': !v$.dataSource.profile_picture.$invalid }">Imagem
                            do perfil</span>
                    </span>
                    <input v-model="dataSource.profile_picture" class="mdc-text-field__input " type="text"
                        aria-labelledby="my-label-id" maxlength="2048">
                    <span class="mdc-line-ripple"></span>

                </label>
            </div>
            <br>
            <div class="container--input">
                <input type="date" name="dateofbirth" id="dateofbirth">
            </div>
            <br>

            <div class="container--input">
                <label
                    class="mdc-text-field mdc-text-field--outlined mdc-text-field--textarea mdc-text-field--with-internal-counter">
                    <span class="mdc-notched-outline">
                        <span class="mdc-notched-outline__leading"></span>
                        <span class="mdc-notched-outline__notch">
                            <span v-if="dataSource.introducao.length == 0"
                                class="mdc-floating-label mdc-floating-label--float-above"><br>Introdução do perfil</span>
                        </span>
                        <span class="mdc-notched-outline__trailing"></span>
                    </span>

                    <span class="mdc-text-field__resizer">
                        <textarea v-model="dataSource.introducao" class="mdc-text-field__input"
                            aria-labelledby="my-label-id" rows="5" cols="222" maxlength="2048"></textarea>
                        <span class="mdc-text-field-character-counter">{{ dataSource.introducao.length }} /
                            2048</span>
                    </span>
                </label>
            </div>
            <br>
            <div class="container--input__right">
                <button class="mdc-button mdc-button--raised mdc-button--salvar">Salvar</button>

            </div>
        </div>

    </div>
</template>

<style scoped>
@import "@/assets/scss/EditarMeuPerfil/editarMeuPerfil.scss";
</style>