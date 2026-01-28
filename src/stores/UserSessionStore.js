import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import user from '@/data/userData.json'

export const userSessionStore = defineStore('userInfo', () => {
 
    //STATE

    const userInfoSession=reactive({
      "name":null,
      "github":null
    })
    //GETTERS

    //Función para obtener los datos del localStorage
    function fill(){
        userInfoSession.name=localStorage.getItem("user") || null
    }

    //ACTION

      function newUser(name){

        const userObject={
            "name":name,
            "gitHub":"",
        }

        localStorage.setItem("user",name)
        userInfoSession.value=userObject
    }
  return {userInfoSession, fill, newUser }
})
