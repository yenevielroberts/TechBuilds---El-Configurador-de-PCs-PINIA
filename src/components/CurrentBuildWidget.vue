<script setup>
import BuildWidgetItem from './buildWidgetItem.vue';
import { buildStore } from '@/stores/BuildStore';


let carrito=buildStore()
carrito.obtenerCarrito()


</script>
<template>
  <section id="section-carrito">
    <h3>Carrito</h3>
    <section id="carrito">
        <BuildWidgetItem v-for="(product, name) in carrito.grouped"
:key="name"
:productCarrito="product[0]" 
:cantidad="product.length"
@delete-product="carrito.removeComponent"/>
  <p><strong>Total: </strong>{{ carrito.totalPrice }}</p>
    <button @click="carrito.checkOut">Checkout</button>
    </section>
  </section>

 
</template>
<style scoped>

.card{
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 10px;
  border: black solid 1px;
  padding: 5px;
}




</style>