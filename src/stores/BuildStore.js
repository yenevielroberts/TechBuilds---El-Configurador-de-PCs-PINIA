import { groupBy } from "lodash";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const buildStore = defineStore('buildStore', () => {

    //STATS
    //Inicialiazo el carrito vacio
    let arrayCarrito = ref([])

    //GETTERS
    //Obtengo el carrito desde el localStorage
    function obtenerCarrito() {
        const saved = localStorage.getItem('carrito')
        //Si el carrito se guardo en el localStorage se pondra en el array sino sera un array vacio
        arrayCarrito.value = saved ? JSON.parse(saved) : [];
    }
 
    const totalPrice=computed(()=> arrayCarrito.value.reduce((acumulador, elemento)=>acumulador+elemento.price,0))
   
    const groupedByname=computed(()=>{
        const grouped=groupBy(arrayCarrito.value, (product)=>product.name)
        const sorted=Object.keys(grouped).sort()
        let inOrder={}
        sorted.forEach((key)=>(inOrder[key]=grouped[key]))
        return inOrder
    })
    //ACTION

    /**Función para añadir un producto el en carrito y guardarlo en el local storage  */
    function addComponent(producto) {
        
        arrayCarrito.value.push(producto)
        localStorage.setItem(
            'carrito',
            JSON.stringify(arrayCarrito.value)
        )

    }

    function checkOut() {

        arrayCarrito.value=[]
        localStorage.removeItem(
          'carrito')
    }

    function removeComponent(prod){
        const prodName=prod.name
       const index=arrayCarrito.value.findIndex(prod => prod.name === prodName);//busco el producto que coincida con el id
        if(index !== -1){
            arrayCarrito.value.splice(index, 1);

            localStorage.setItem(
                'carrito',
                JSON.stringify(arrayCarrito.value)
            )
        }
    }





    return { arrayCarrito,groupedByname, totalPrice, addComponent, obtenerCarrito,checkOut, removeComponent }
})