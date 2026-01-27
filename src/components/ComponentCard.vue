<script setup>

const props = defineProps({
  product: Object,
});

// emits
const emit =defineEmits(["addToCart"])

const addToCart=()=>{
  emit('addToCart', props.product)
}


</script>
<template>

  <div class="card">
     <p><strong>{{ product.name }}</strong></p> 
     <p>{{ product.type }}</p>
     <p>${{ product.price }}</p>
     <button @click="addToCart">Añadir al carrito</button>
        
 
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