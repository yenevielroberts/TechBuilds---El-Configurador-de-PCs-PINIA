<script setup>
import NavBar from './components/NavBar.vue';
import { userSessionStore } from '@/stores/UserSessionStore';
import {useProductStore} from '@/stores/HardwareStore'
import ComponentCard from '@/components/ComponentCard.vue';
import { buildStore } from '@/stores/BuildStore';
import CurrentBuildWidget from './components/CurrentBuildWidget.vue';

let carrito=buildStore()
const user=userSessionStore()
const products=useProductStore()
products.loadHardware()//Obtengo los productos para mostrar


if(!user.getUserName()){
  user.newUser()
  carrito.obtenerCarrito()

}


</script>

<template>
 <NavBar :user="user.userInfoSession"/>

<h1>Hardware Components</h1>
<ComponentCard 
v-for=" hardware in products.productsRef"
:key="hardware.name"
:product="hardware"
@add-to-cart="carrito.addCarrito"

/>

<CurrentBuildWidget 
v-for="product in carrito.arrayCarrito"
:key="product.name"
:productCarrito="product"
/>

</template>
<style >

  *{
    margin: 0;
    padding: 0;
  }
</style>
