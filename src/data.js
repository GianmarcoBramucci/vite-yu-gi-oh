import { reactive } from "vue";
export const data = reactive({
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0',
    cards: [],
    cardsNum: 0
})