<script setup>

const props=defineProps({
    user: Object
})


const emit=defineEmits(["mostrarCarrito"])
const mostrarCarrito=()=>{
  
    emit("mostrarCarrito", true)
}
</script>

<template>

<header>
    <div id="header-content">
        <div>
            <h1>TechBuilds</h1>
        </div>
        <div id="div-user-info">
            <p>{{user.name}}</p>
            <button @click="mostrarCarrito">cart</button>
        </div>
    </div>
</header>
</template>

<style scoped>

header{
    width: 100%;
    background-color: cadetblue;
    height: auto;
}
#header-content{
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#div-user-info{

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#div-user-info > button{
    margin-left: 20px;
   
}
</style>