<template>
    <div>
        <div data-page="home" class="page">

            <!--<form class="searchbar"><div class="searchbar-input"><input placeholder="Search in items" type="search" class=""><a href="#" class="searchbar-clear"></a></div><a href="#" class="searchbar-cancel" style="display: block; margin-right: -53px;">Cancel</a></form>-->


            <!-- Search Bar -->
            <form data-search-list=".list-block-search" data-search-in=".item-title-row" class="searchbar searchbar-init">
                <div class="searchbar-input">
                    <input type="search" placeholder="Buscar Técnico"><a href="#" class="searchbar-clear"></a>
                </div><a href="#" class="searchbar-cancel">Cancelar</a>
            </form>

            <!-- Search Bar overlay -->
            <div class="searchbar-overlay"></div>

            <div class="page-content">
                <h2 class="title">Técnicos Disponibles</h2>

                <!-- This block will be displayed if nothing found -->
                <div class="content-block searchbar-not-found">
                    <div class="content-block-inner m-top--35">No se encontró ningún resultado</div>
                </div>

                <!-- This block will be displayed if anything found, and this list block is used a searbar target -->
                <div class="list-block list-block-search searchbar-found m-0">
                    <ul v-if="technicals.length">
                        <li v-for="technical in technicals"
                            class="item-content list-item-content">
                            <!--<f7-link @click="$router.load({url: '/technical/' + technical.id })">-->
                            <f7-link :href='"/technical/"+technical.id'  class="item-link close-panel">
                            <!--<a href="#" class="item-link ">-->
                                <div class="item-inner">
                                    <div class="item-title-row">
                                        <div class="item-media inline">
                                            <img :src="technical.avatar" style="border-radius: 50%; width:100px">
                                        </div>
                                        <div class="inline m-l-15">
                                            <p class="text-title m-b-0">
                                                {{ technical.name + " " + technical.last_name | truncate }}
                                            </p>
                                            <div class="text-secundary bold">
                                                {{ technical.main_skill }}
                                                <div class="inline" v-if="technical.rating">
                                                    -
                                                    <span v-for="n in technical.rating">
                                                        <i class="fa fa-star text-orange"
                                                           style="font-size: 19px !important;"
                                                           aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                             </div>
                                            <div class="text-blue">
                                                {{ technical.phone }}
                                            </div>
                                            <div>
                                                Precio P/H:  <span class="text-green bold">RD$ {{ technical.charge_per_hour }}</span>
                                            </div>
                                            <div class="text-gray">
                                                {{ technical.province }}
                                            </div>

                                        </div>

                                    </div>


                                </div>
                            </f7-link>

                        </li>

                        <!--<li class="item-content">-->
                            <!--<div class="item-inner">-->
                                <!--<div class="item-title">Audi</div>-->
                            <!--</div>-->
                        <!--</li>-->
                        ...
                      </ul>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        created() {

            this.loadTechnicals();
        },
        filters: {
            truncate(text, length = 20) {
                if (text.length > 20) {
                    return text.substring(0, 20) + "...";
                }
                return text;
            }
        },
        data: function() {
            return {
                technicals: [],
            }
        },
        methods: {
            loadTechnicals() {
                axios({
                    "url": `${api}/technicals`,
                    "methods": "GET",
                }).then(response => {
                    this.technicals = response.data;
                })
            },
            onSearch: function(query, found) {
                console.log('search', query);
            },
            onClear: function(event) {
                console.log('clear');
            },
            onEnable: function(event) {
                console.log('enable');
            },
            onDisable: function(event) {
                console.log('disable');
            },
        }
    }
</script>
<style scoped>
    .title {
        text-align: center;
        background: white;
        margin: 0 !important;
        padding: 25px;
    }

    .m-l-15{
        margin-left: 15px;
    }
    .m-0 {
        margin: 0 !important;
    }
    .m-top--35{
        margin-top: -35px !important;
        font-size: large;
    }
    .inline{
        display: inline-block !important;
    }
    .text-title{
        font-size: larger;
        font-weight: 700;

    }

    .list-style{
        list-style: none !important;
    }

    .p-l-15{
        padding-left: 15px !important;
    }
    .text-green{
        color: darkgreen;
    }
    .text-gray {
        color: gray;
    }
    .text-blue{
        color: dodgerblue;
    }
    .text-secundary{
        color: #2c3e50;
    }
    .text-orange{
        color: darkorange;
    }

    .bold{
        font-weight: 700;
    }

    .line{
        content: '';
        /*position: absolute;*/
        /*left: 0;*/
        /*bottom: 0;*/
        right: auto;
        top: auto;
        height: 1px;
        width: 100%;
        background-color: #c8c7cc;
        display: block;
        z-index: 15;
        -webkit-transform-origin: 50% 100%;
        transform-origin: 50% 100%;
    }

    .m-b-0{
        margin-bottom: 0;
    }

    .skill{
    }

    .item-link{
        width: 100%;
    }

    .list-item-content{
        margin-left: 4px !important;
        padding-left: 0 !important;

    }
</style>