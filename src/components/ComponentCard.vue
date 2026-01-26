<script setup>
import { ref} from 'vue';
import { useFetch } from '../composables/useFetch';



const url= ref(`http://localhost:3000/usuarios`)
const {data, error,loading, fetchData}=useFetch(url);

</script>

<template>
  <div v-if="loading">
      <p>loading</p>
  </div>

  <div v-else-if="error">
    <p>Error: {{ error }}</p>
  </div>

  <div v-else>
      <!--Aquí ya se cargó los datos de la api-->
        <div  v-if="data">
            <p><strong>Titulo: </strong>{{ data.name}}</p>
        </div>
    </div>
</template>

<style  scoped>
</style>