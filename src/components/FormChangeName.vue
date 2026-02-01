<script setup>
import { userSessionStore } from '@/stores/UserSessionStore';
import { ref } from 'vue';

const userInfo=userSessionStore()
const name=ref("")
const github=ref("")

const login=()=>{
    const finalName=name.value.trim() || "GuestBuilder"
    userInfo.newUser(finalName, github)
}

</script>
<template>
<dialog id="modalCambiarNombre">
  <form>
    <label>Nombre</label>
    <input v-model="name" placeholder="Optional"/>

     <label>Git link</label>
    <input v-model="github" placeholder="Optional"/>

    <button @click="login">Login</button>

</form>  
</dialog>

</template>

<style scoped>
</style>