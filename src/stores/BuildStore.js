import { defineStore } from "pinia";
import { ref } from "vue";
import carritoDatos from '@/data/carrito.json'

export const buildStore=defineStore('carrito',()=>{

    //STATS
    const arrayCarrrito=ref([])

    //GETTERS
    function obtenerCarrito(){
        const saved=localStorage.getItem('carrito')
        arrayCarrrito.value=saved ? JSON.parse(saved): null
    }
    function totalPrice(){

    }
    //ACTION

    /**Función para añadir un producto el en carrito  */
    function addCarrito(producto){

        arrayCarrrito.value.push(producto)
      
    }

    function guardarCarrito(){

          /*localStorage.setItem(
            'carrito',
            JSON.stringify(arrayCarrrito.value)
        )*/
    }

    

    return {arrayCarrrito, totalPrice,addCarrito,obtenerCarrito}
})