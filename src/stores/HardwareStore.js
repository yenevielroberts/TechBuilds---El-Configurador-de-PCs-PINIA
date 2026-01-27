import { ref } from 'vue'
import { defineStore } from 'pinia'
import products from '@/data/hardware.json'

export const useProductStore = defineStore('ProductStore', () => {

    //state
    const productsRef = ref([]);//Tiene que ser reactivo para que pueda renderizar
  
    //actions
    function loadHardware() {
        productsRef.value = products;
    }

    return { productsRef, loadHardware }//Sin {} retorna todo el store
})