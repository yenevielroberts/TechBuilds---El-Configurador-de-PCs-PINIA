<script setup>

const props = defineProps({
  productCarrito: Object,
});

// emits
const emit =defineEmits(["deleteProduct"])

const deleteProd=()=>{
    emit('deleteProduct',props.productCarrito)
}

</script>
<template>
<h3>Carrito</h3>
  <div class="card">
     <p><strong>{{ productCarrito.name }}</strong></p> 
     <p>${{ productCarrito.price }}</p>
     <button @click="deleteProd">Eliminar</button>
  </div>
 
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