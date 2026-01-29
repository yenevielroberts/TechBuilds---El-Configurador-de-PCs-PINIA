<script setup>

const props = defineProps({
  productCarrito: Object,
  cantidad:Number
});

// emits
const emit =defineEmits(["deleteProduct"])

const deleteProd=(product)=>{
    emit('deleteProduct',product)
}

</script>
<template>

<div class="card">
     <p><strong>{{ productCarrito.name }}</strong></p> 
     <p>${{ productCarrito.price }}</p>
     <p>{{ productCarrito.type }}</p>
     <p>{{ cantidad }}</p>
     <button @click="deleteProd(productCarrito)">Eliminar</button>
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