<script setup>
import { userSessionStore } from '@/stores/UserSessionStore';
import { ref } from 'vue';

const userInfo=userSessionStore()
const name=ref("")

const login=()=>{
    const finalName=name.value.trim() || "GuestBuilder"
    userInfo.newUser(finalName)
}


</script>
<template>

<form>
    <label>Nombre</label>
    <input v-model="name" placeholder="Optional"/>
    <button @click="login">Login</button>

</form>
</template>

<style scoped>
</style>