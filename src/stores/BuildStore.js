import { defineStore } from "pinia";
import { ref } from "vue";

export const buildStore=defineStore('buildStore',()=>{

    //STATS
    //Inicialiazo el carrito con localStorage o vacio
    const arrayCarrito=ref(JSON.parse(localStorage.getItem('carrito')) || [])

    //GETTERS
    //Obtengo el carrito desde el localStorage
    function obtenerCarrito(){
        const saved=localStorage.getItem('carrito')
        //Si ell carrito se guardo en el localStorage se pondra en el array sino sera un array vacio
        arrayCarrito.value=saved ? JSON.parse(saved): [];
    }
    function totalPrice(){

    }
    //ACTION

    /**Función para añadir un producto el en carrito y guardarlo en el local storage  */
    function addCarrito(producto){
        arrayCarrito.value.push(producto)
        localStorage.setItem(
            'carrito',
            JSON.stringify(arrayCarrito.value)
        )
      
    }

    function guardarCarrito(){

          /*localStorage.setItem(
            'carrito',
            JSON.stringify(arrayCarrrito.value)
        )*/
    }

    

    return {arrayCarrito, totalPrice,addCarrito,obtenerCarrito}
})