<template>
    <!--<f7-page>-->
        <!--<form>-->
            <!--<f7-navbar title="Iniciar Sesión" back-link="Atrás" sliding></f7-navbar>-->
            <!--<f7-block-title>Introduzca sus datos</f7-block-title>-->
            <!--<f7-list form>-->
                <!--<f7-list-item>-->
                    <!--<f7-label>Correo</f7-label>-->
                    <!--<f7-input type="email" placeholder="juan@gmail.com"></f7-input>-->
                <!--</f7-list-item>-->
                <!--<f7-list-item>-->
                    <!--<f7-label>Contraseña</f7-label>-->
                    <!--<f7-input type="password" placeholder="Contraseña"></f7-input>-->
                <!--</f7-list-item>-->

                <!--<f7-block>-->
                    <!--<f7-button fill big color="primary" style="margin-top: -15px">Iniciar Sesión</f7-button>-->
                   <!--<f7-button fill big color="primary" class="m-t-15">Registrarme</f7-button>-->
                <!--</f7-block>-->

            <!--</f7-list>-->
        <!--</form>-->
    <!--</f7-page>-->

    <f7-login-screen id="login-screen">
        <f7-view>
            <f7-pages>
                <f7-page login-screen>
                    <f7-login-screen-title>Inicio de Sesión</f7-login-screen-title>
                    <f7-list form>
                        <f7-list-item>
                            <f7-label>Correo</f7-label>
                            <f7-input type="email" placeholder="juan@gmail.com"></f7-input>
                        </f7-list-item>
                        <f7-list-item>
                            <f7-label>Contraseña</f7-label>
                            <f7-input type="password" placeholder="Contraseña"></f7-input>
                        </f7-list-item>
                    </f7-list>
                    <f7-list>
                        <f7-list-button title="Iniciar Sesión" close-login-screen></f7-list-button>
                        <f7-list-label>
                            <p>Si no tienes cuenta puedes registrarte haciendo click aquí</p>
                        </f7-list-label>
                    </f7-list>
                </f7-page>
            </f7-pages>
        </f7-view>
    </f7-login-screen>

</template>

<script>
    export default {}
</script>