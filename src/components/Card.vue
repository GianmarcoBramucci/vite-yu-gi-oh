<template>
    <div class="card-countainer">
        <img :src="img" alt="">
        <div class="card-text">
            <h5 class="tittle">{{name}}</h5>
            <div>{{arkeotip}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props:[
            'img',
            'name',
            'arkeotip'
        ]
    }
</script>

<style lang="scss" scoped>
@use '../assets/variabols' as *;
.card-text{
    background-color: $orage;
    text-align: center;
    align-items: center;
    min-height: 70px;
    width: 100%;
}
.tittle{
    color: $white;
}
.card-countainer{
    min-height: 200px;
    margin: 20px;
}
img{
    width: 100%;
}
</style>