<template>
  <div>
    <Header @stausSelect="setOptions()"/>
    <Main/>
  </div>
</template>

<script>
import Main from './components/CompMain.vue'
import Header from './components/Header.vue'
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
      Main,
      Header
    },
    methods:{
      getcards: function(){
        axios.get(this.data.apiUrl+this.data.endPointCards,this.data.options).then((res)=>{
          this.data.cardsNum= res.data.meta.current_rows;
          this.data.cards = res.data.data;
          console.log(this.data.cardsNum);
          console.log(this.data.cards);
      })  
      },
      getArkeotip: function(){
        axios.get(this.data.apiUrl + this.data.endPointArkeotip).then((res)=>{
          this.data.arkeotips = res.data.slice(0, 10);
          console.log(this.data.arkeotips); 
        })
      },
      setOptions: function(){
        if(this.data.arkeSelect){
          this.data.options.params.archetype = this.data.arkeSelect; 
        }
        else{
          delete this.data.options.params.archetype;
        }
      }
    },
    created(){
      this.getcards();
      this.getArkeotip();
    }
  }
</script>

<style lang="scss" scoped>

</style>