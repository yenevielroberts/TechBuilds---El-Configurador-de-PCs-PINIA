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
  <div class="info">
    <span class="type-badge">{{ productCarrito.type }}</span>
     <h3>{{ productCarrito.name }}</h3> 
     <p class="price">${{ productCarrito.price }}</p>
     <p class="quantity">{{ cantidad }}</p>
  </div>
     <button @click="deleteProd(productCarrito)" class="delete-btn">Eliminar</button>
  </div>
</template>
<style scoped>


h3 {
  margin: 8px 0;
  font-size: 20px;
  color: #1e293b;
}
.price {
  color: #10b981; 
  font-weight: 700;
  font-size: 1.2rem;
  margin: 4px 0;
}
.quantity {
  font-size: 15px;
  color: #485664;
}
.delete-btn {
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 8px;
  margin-top: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s;
}

.delete-btn:hover {
  background-color: #dc2626;
}

</style>