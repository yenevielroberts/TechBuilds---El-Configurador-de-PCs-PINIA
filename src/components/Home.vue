<script setup>
import {useProductStore} from '@/stores/HardwareStore'
import ComponentCard from '@/components/ComponentCard.vue';
import { buildStore } from '@/stores/BuildStore';

const products=useProductStore()
products.loadHardware()
const carrito=buildStore()

</script>

<template>
<h1>Hardware Components</h1>

<ComponentCard 
v-for=" hardware in products.productsRef"
:key="hardware.name"
:product="hardware"
@addToCart="carrito.addCarrito"

/>
</template>

<style >

  *{
    margin: 0;
    padding: 0;
  }
</style>
