import { reactive } from "vue";
export const data = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/',
    options:{
        params:{
            num: 40,
            offset: 0, 
        }
    }
    endPointCards:'cardinfo.php',
    cards: [],
    cardsNum: 0,
    endPointArkeotip:'archetypes.php',
    arkeotips:[],
    arkeSelect:'',
})