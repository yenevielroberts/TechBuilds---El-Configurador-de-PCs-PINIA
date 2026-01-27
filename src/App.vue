<script setup>
import {useProductStore} from '@/stores/HardwareStore'
import ComponentCard from './components/ComponentCard.vue';
import NavBar from './components/NavBar.vue';
import { userSessionStore } from './stores/UserSessionStore';
import { buildStore } from './stores/BuildStore';

const products=useProductStore()
products.loadHardware()
const userInfo=userSessionStore()
userInfo.fill()
const carrito=buildStore()

//const userName=prompt("escribe tu nombre")

//userInfo.newUser(userName)
</script>

<template>
 <NavBar />
<h1>Hardware Components</h1>

<ComponentCard 
v-for=" hardware in products.productsRef"
:key="hardware.name"
:product="hardware"
@addToCart="carrito.addCarrito()"

/>
</template>

<style >

  *{
    margin: 0;
    padding: 0;
  }
</style>
