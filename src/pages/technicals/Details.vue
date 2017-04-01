<template>
    <div>



    </div>
</template>

<script>
    export default {

        data: function() {
            return {
                technicalId: '',// this.$route.params.id,
                technical: null
            }
        },
        methods: {
            loadTechnical() {
//                axios({
//                    "url": `${api}/technicals/${this.technicalId}`,
//                    "methods": "GET",
//                }).then(response => {
//                    this.technical = response.data;
//                })
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