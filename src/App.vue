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


if(user.userInfoSession.name=="GuestBuilder"){
  //Si no hay usuario de localStorage creo uno
  user.newUser()
}


let showCarrito=ref(false);
const handlerShowCarrito=(show)=>{

  showCarrito.value=show
}

function añadirProd(prod){

  carrito.addComponent(prod)
  alert("Product: "+ prod.name+" added with success")
}

function cambiarNombre(param){

  if(param){
    const newName=prompt("Introduce tu nombre");

  // Valido que no sea null (si cancela) y que tenga contenido
    if(newName.length>0){
      user.changeUserName(newName)
    }
    
  }
   // Llamamos a la segunda función SIEMPRE después de intentar cambiar el nombre
    cambiarLink()

}

function cambiarLink(){

   const cambirEnlace=confirm("Quieres cambiar el enlace de github?")

      if(cambirEnlace){
          const githubLink=prompt("Introduce tu link de github")

          if (githubLink && githubLink.length>0){ user.changeGitLink(githubLink) }
      }

}


</script>

<template>
<NavBar :user="user.userInfoSession" @mostrar-carrito="handlerShowCarrito" @change-user-name="cambiarNombre"/>


<div class="main-container">
  <section class="container-components">
    <h1>Hardware Components</h1>
    <div id="container-prods">
        <ComponentCard 
    v-for=" hardware in products.productsRef"
    :key="hardware.name"
    :product="hardware"
    @add-to-cart="añadirProd"
    />
    </div>
  </section>

  <CurrentBuildWidget v-show="showCarrito"
  />
</div>
</template>
<style >

  *{
    margin: 0;
    padding: 0;
  }

 .main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 }
 .container-components{
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin:10px;
  padding: 10px;
  border-radius: 10px;
  background-color:#f2d29b ;
 }
#container-prods{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
}
 #section-carrito{
  background-color:#f2d29b ;
  padding: 10px;
  border-radius: 10px;
  margin-top:10px;
  margin-right: 20px;
 }

 .card{
 background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 220px;
  margin: 15px;
  border: 1px solid #e1e8ed;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  border-color: #485664;
}
 
.checkout-btn,.añadir-btn {
  background-color:#1fd26d;
  font-size: 14px;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px;
  margin-top: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.checkout-btn:hover {
  background-color: rgb(17, 103, 58);
}

.añadir-btn:hover{
  background-color: rgb(17, 103, 58);
}
</style>
