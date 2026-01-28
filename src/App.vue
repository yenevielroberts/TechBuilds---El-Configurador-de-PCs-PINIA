<script setup>
import Home from '@/components/Home.vue';
import Login from './components/Login.vue';
import NavBar from './components/NavBar.vue';
import { userSessionStore } from '@/stores/UserSessionStore';

const user=userSessionStore()
user.fill()

console.log(user.userInfoSession.name)
</script>

<template>
 <NavBar :user="user.userInfoSession"/>

<Login v-if="!user.userInfoSession"/>
<Home v-else/>


</template>

<style >

  *{
    margin: 0;
    padding: 0;
  }
</style>
