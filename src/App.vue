<template>
  <div>

  </div>
</template>

<script>
import { data } from './data';
import axios from 'axios';
  export default {
    name: 'App',
    data(){
      return{
        data
      }
    },
    components:{

    },
    created(){
      axios.get(this.data.apiUrl).then((res)=>{
        this.data.cardsNum= res.data.meta.current_rows;
        this.data.cards = res.data.data;
        console.log(this.data.cardsNum);
        console.log(this.data.cards);
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>