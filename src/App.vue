<script setup>
import { storeToRefs } from 'pinia';
import NavBar from './components/NavBar.vue';
import { userSessionStore } from './stores/UserSessionStore';

const userStore=userSessionStore()
userStore.fill()

const {userInfoSession}=storeToRefs(userSessionStore())
</script>

<template>
 
 <NavBar/>

<div v-for="user in userInfoSession">

  <p>{{ user.name }}</p>

</div>
</template>

<style >

  *{
    margin: 0;
    padding: 0;
  }
</style>
