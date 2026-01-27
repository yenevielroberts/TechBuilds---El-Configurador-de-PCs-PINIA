import { defineStore } from "pinia";
import { ref } from "vue";
import carritoDatos from '@/data/carrito.json'

export const buildStore=defineStore('carrito',()=>{

    //STATS
    const arrayCarrrito=ref([])

    //GETTERS
    function obtenerCarrito(){
        arrayCarrrito.value=carritoDatos
    }
    function totalPrice(){

    }
    //ACTION

    function addCarrito(producto){

        arrayCarrrito.value.push(producto)
        console.log(producto)
    }

    return {arrayCarrrito, totalPrice,addCarrito,obtenerCarrito}
})