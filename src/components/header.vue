<template>
    <div>
        <select class="form-select" aria-label="Default select example" v-model="data.arkeSelect" @change="$emit('stausSelect')">
            <option selected>All</option>
            <option v-for="arke in data.arkeotips" :value="arke.archetype_name">{{ arke.archetype_name }}</option>
          </select>
    </div>
</template>

<script>
    import { data } from '../data';
    export default {
        name: 'Header',
        data(){
            return{
                data
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>