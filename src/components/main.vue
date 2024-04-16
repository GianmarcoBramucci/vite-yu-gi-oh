<template>
    <div class="container container-main">
        <div class="container main-header">
            <h5>Found {{data.cardsNum}} cards</h5>
        </div>
        <div class="container">
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                <Card v-for="card in data.cards" :img="card.card_images[0].image_url_small" :name="card.name" :arkeotip="card.archetype" />
            </div>
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
import { data } from '../data';
    export default {
        name: 'Main',
        data(){
            return{
                data
            }
        },
        components:{
            Card
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/variabols' as *;
    .container-main{
        background-color: $white;
    }
    .main-header{
        background-color: $black;
        color: $white;
    }

</style>