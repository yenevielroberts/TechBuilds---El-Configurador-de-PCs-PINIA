<script setup>

const props = defineProps({
  product: Object,
});

// emits
const emit =defineEmits(["addToCart"])

const addToCart=()=>{
  emit("addToCart", props.product)
}


</script>
<template>

  <div class="card">
    <img :src="product.image" :alt="`Foto del producto ${product.name}`"/>
     <p><strong>{{ product.name }}</strong></p> 
     <p>{{ product.type }}</p>
     <p>${{ product.price }}</p>
     <button @click="addToCart" class="añadir-btn">Add component</button>
  </div>
 
</template>
