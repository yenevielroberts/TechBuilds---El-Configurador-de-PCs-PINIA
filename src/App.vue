<script setup>
import {useProductStore} from '@/stores/HardwareStore'
import { storeToRefs } from 'pinia';
import ComponentCard from './components/ComponentCard.vue';
import NavBar from './components/NavBar.vue';

const products=useProductStore()
products.loadHardware()
const {productsRef}=storeToRefs(useProductStore())
</script>

<template>
 <NavBar />
<h1>Hardware Components</h1>

<ComponentCard 
v-for=" hardware in productsRef"
:key="hardware.name"
:product="hardware"

/>
</template>

<style >

  *{
    margin: 0;
    padding: 0;
  }
</style>
