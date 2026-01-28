import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import user from '@/data/userData.json'

export const userSessionStore = defineStore('userInfo', () => {
 
    //STATE

    const userInfoSession=ref([])
    //GETTERS

    //Función para obtener los datos del localStorage
    function fill(){
        userInfoSession.value=localStorage.getItem("user") || null
    }

    //ACTION

      function newUser(name){

        const userObject={
            "name":name,
            "gitHub":"",
        }

        localStorage.setItem("user",name)
        userInfoSession.value.push(userObject) 
    }


    

  return {userInfoSession, fill, newUser }
})
