<script setup>
import { ref } from 'vue';
const props=defineProps({
    user: Object
})

const emit=defineEmits(["mostrarCarrito","changeUSerName"])

const carritoVisible=ref(false);

const toggleCarrito=()=>{
    carritoVisible.value = !carritoVisible.value;
    emit("mostrarCarrito", carritoVisible.value)
}

//función que redirije a al perfil de github
function verGithub(){
    console.log(props.user.github)
    window.open(props.user.github,"_blank")
}


function changeUSerName(){
    const cambiarNombre=confirm("¿Quieres cambiar el nombre de usuario?");
    emit("changeUserName",cambiarNombre)

    
}
</script>

<template>

<header>
        <div>
            <h2>TechBuilds</h2>
        </div>
        <div id="div-user-info">
            <button class="userName"@click="changeUSerName">Hello, {{user.name}}</button>
            <button @click="verGithub" class="enlaceGit">Github</button>
            <button @click="toggleCarrito" class="btn-carrito">
                {{ carritoVisible ? 'Close Cart' : 'Cart' }}
            </button>
        </div>
</header>
</template>

<style scoped>

header{
    width: 100%;
    background-color:#9a88e6;
    display: flex;
    height: 100px;
     align-items: center;
     justify-content: space-between;
    
}

h2{
  margin-left:5px;
 }
#div-user-info{
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

.userName:hover{

    color:white;
}
.btn-carrito,.enlaceGit, .userName{
    border: none;
    margin-left: 20px;
    padding: 5px;
    background-color:#9a88e6;
    font-size: 13px;
    font-weight: 550;
    color:yellow
}

.enlaceGit:hover{
    color: white;
}
.btn-carrito:hover{
    color: white;
}

</style>