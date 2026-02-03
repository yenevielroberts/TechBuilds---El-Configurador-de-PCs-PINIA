<script setup>
import BuildWidgetItem from './buildWidgetItem.vue';
import { buildStore } from '@/stores/BuildStore';


let carrito=buildStore()
carrito.obtenerCarrito()

function checkOut(){

  console.log(carrito.arrayCarrito)
  if(carrito.arrayCarrito.length==0){

    alert("No hay nada en el carrito")
  }else{
     carrito.checkOut()
     alert("Checkout done with success")
  }
 
}

</script>
<template>
  <section id="section-carrito">
    <h2>Your PC</h2>
    <div id="carrito">
        <BuildWidgetItem v-for="(product, name) in carrito.groupedByType"
        :key="name"
        :productCarrito="product[0]" 
        :cantidad="product.length"
        @delete-product="carrito.removeComponent"/>
          
    </div>
    <p class="total"><strong>Total: </strong>${{ carrito.totalPrice }}</p>
    <button @click="checkOut" class="checkout-btn">Checkout</button>
  </section>

 
</template>
<style scoped>

#section-carrito{
  max-width: 600px;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 20px;
  

}
.total{
  font-size: 20px;
}

#carrito{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}




</style>