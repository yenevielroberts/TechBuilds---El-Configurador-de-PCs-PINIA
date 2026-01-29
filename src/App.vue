<script setup>
import NavBar from './components/NavBar.vue';
import { userSessionStore } from '@/stores/UserSessionStore';
import {useProductStore} from '@/stores/HardwareStore'
import ComponentCard from '@/components/ComponentCard.vue';
import CurrentBuildWidget from './components/CurrentBuildWidget.vue';
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { buildStore } from './stores/BuildStore';


const carrito=buildStore()
const user=userSessionStore()
const products=useProductStore()
products.loadHardware()//Obtengo los productos para mostrar


if(!user.getUserName()){
  //Si no hay usuario de localStorage creo uno
  user.newUser()
}


let showCarrito=ref(false);
const handlerShowCarrito=(show)=>{

  showCarrito.value=show
}


</script>

<template>
 <NavBar :user="user.userInfoSession" @mostrar-carrito="handlerShowCarrito"/>

<h1>Hardware Components</h1>
<ComponentCard 
v-for=" hardware in products.productsRef"
:key="hardware.name"
:product="hardware"
@add-to-cart="carrito.addComponent"

/>

<CurrentBuildWidget v-show="showCarrito"
/>

</template>
<style >

  *{
    margin: 0;
    padding: 0;
  }
</style>
