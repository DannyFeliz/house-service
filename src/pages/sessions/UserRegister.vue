<template>
    <f7-page>
        <f7-navbar title="Registro de Usuario" back-link="Atrás" sliding></f7-navbar>

        <f7-block-title>Información Personal</f7-block-title>

        <f7-list form>
            <f7-list-item>
                <f7-icon slot="media" f7="person"></f7-icon>
                <f7-label>Nombre</f7-label>
                <f7-input type="text" placeholder="Juan"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-icon slot="media" f7="persons"></f7-icon>
                <f7-label>Apellido</f7-label>
                <f7-input type="text" placeholder="Perez"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-icon slot="media" f7="email"></f7-icon>
                <f7-label>Correo</f7-label>
                <f7-input type="email" placeholder="juan@gmail.com"></f7-input>
            </f7-list-item>
            <f7-list-item>
                <f7-icon slot="media" f7="lock"></f7-icon>
                <f7-label>Contraseña</f7-label>
                <f7-input type="password" placeholder="••••••"></f7-input>
            </f7-list-item>

            <f7-list-item>
                <f7-icon slot="media" f7="phone"></f7-icon>
                <f7-label>Teléfono</f7-label>
                <f7-input type="number" placeholder="809-000-0000"></f7-input>
            </f7-list-item>

            <f7-list-item smart-select
                          smart-select-searchnar-placeholder="Buscar"
                          smart-select-back-text="Atrás"
                          smart-select-virtual-list
                          smart-select-searchbar
                          smart-select-searchbar-cancel="Cancelar"
                          title="Provincia">

                <f7-icon slot="media" f7="world"></f7-icon>
                <!-- Select with values inside -->
                <select id="province">
                    <option selected value="Distrito Nacional">Distrito Nacional</option>
                    <option value="Azua">Azua</option>
                    <option value="Baoruco">Baoruco</option>
                    <option value="Barahona">Barahona</option>
                    <option value="Dajabón">Dajabón</option>
                    <option value="Duarte">Duarte</option>
                    <option value="El Seibo">El Seibo</option>
                    <option value="Elías Piña">Elías Piña</option>
                    <option value="Espaillat">Espaillat</option>
                    <option value="Hato Mayor">Hato Mayor</option>
                    <option value="Hermanas Mirabal">Hermanas Mirabal</option>
                    <option value="Independencia">Independencia</option>
                    <option value="La Altagracia">La Altagracia</option>
                    <option value="La Romana">La Romana</option>
                    <option value="La Vega">La Vega</option>
                    <option value="María Trinidad Sánchez">María Trinidad Sánchez</option>
                    <option value="Monseñor Nouel">Monseñor Nouel</option>
                    <option value="Monte Plata">Monte Plata</option>
                    <option value="Montecristi">Montecristi</option>
                    <option value="Pedernales">Pedernales</option>
                    <option value="Peravia">Peravia</option>
                    <option value="Puerto Plata">Puerto Plata</option>
                    <option value="Samaná">Samaná</option>
                    <option value="San Cristóbal">San Cristóbal</option>
                    <option value="San José de Ocoa">San José de Ocoa</option>
                    <option value="San Juan">San Juan</option>
                    <option value="San Pedro de Macorís">San Pedro de Macorís</option>
                    <option value="Sánchez Ramírez">Sánchez Ramírez</option>
                    <option value="Santiago">Santiago</option>
                    <option value="Santiago Rodríguez">Santiago Rodríguez</option>
                    <option value="Santo Domingo">Santo Domingo</option>
                    <option value="Valverde">Valverde</option>
                </select>
            </f7-list-item>
        </f7-list>

        <f7-block-title>Datos de Tarjeta de Crédito</f7-block-title>
        <f7-list>
            <f7-list-item>
                <f7-icon slot="media" f7="card"></f7-icon>
                <f7-label>Num. Tarjeta</f7-label>
                <f7-input type="number" placeholder="0000 0000 0000 0000"></f7-input>
            </f7-list-item>

            <f7-list-item smart-select
                          smart-select-searchnar-placeholder="Buscar"
                          smart-select-back-text="Atrás"
                          smart-select-virtual-list
                          smart-select-searchbar
                          smart-select-searchbar-cancel="Cancelar"
                          title="Día Exp.">

                <f7-icon slot="media" f7="today"></f7-icon>
                <!-- Select with values inside -->
                <select v-model="expirationDay" class="align">
                    <option :value="n" v-for="n in 31">{{ n }} </option>
                </select>
            </f7-list-item>

            <f7-list-item smart-select
                          smart-select-searchnar-placeholder="Buscar"
                          smart-select-back-text="Atrás"
                          smart-select-virtual-list
                          smart-select-searchbar
                          smart-select-searchbar-cancel="Cancelar"
                          title="Mes Exp.">

                <f7-icon slot="media" f7="today"></f7-icon>
                <!-- Select with values inside -->
                <select v-model="expirationMonth" class="align">
                    <option :value="n" v-for="n in 12">{{ n}}</option>

                </select>
            </f7-list-item>

            <f7-list-item smart-select
                          smart-select-searchnar-placeholder="Buscar"
                          smart-select-back-text="Atrás"
                          smart-select-virtual-list
                          smart-select-searchbar
                          smart-select-searchbar-cancel="Cancelar"
                          title="Año Exp.">

                <f7-icon slot="media" f7="today"></f7-icon>
                <!-- Select with values inside -->
                <select v-model="expirationYear" class="align">
                    <option :value="n + 2016" v-for="n in 15">{{n + 2016}}</option>
                </select>
            </f7-list-item>

            <f7-list-item>
                <!--<f7-icon slot="media" f7="card"></f7-icon>-->

                <div class="item-media">
                    <i class="fa fa-cc" aria-hidden="true"></i>
                </div>
                <f7-label class="me">CCV</f7-label>
                <f7-input type="number" placeholder="123"></f7-input>
            </f7-list-item>

            <f7-block>
                <f7-button fill big color="primary" class="m-t-15">Registrarme</f7-button>
            </f7-block>

        </f7-list>



    </f7-page>
</template>

<script>
    export default {
        mounted() {
        },
        data() {
            return {
                expirationYear: '2017',
                expirationMonth: '3',
                expirationDay: '10',
            }
        },
        watch: {
            expirationYear() {
               console.log(this.expirationYear);
            }
        }
    }
</script>

<style>
    #province + div.item-after, .align + div.item-after{
        width: 100%;
        max-width: 62% !important;
    }
</style>