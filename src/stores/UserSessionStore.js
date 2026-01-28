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
    function getUserName(){
        userInfoSession.name=localStorage.getItem("user") || null
    }

    //ACTION

      function newUser(name="GuestBuilder"){

        const userObject={
            "name":name,
            "gitHub":"",
        }

        localStorage.setItem("user",name)
        userInfoSession.value=userObject
    }

    function changeUserName(newName){
        userInfoSession.name=newName
        localStorage.setItem("user",newName)
    }

    function checkOut(){
      userInfoSession.name= "GuestBuilder"
      localStorage.removeItem("usuario")
      console.log("logout")
    }
  return {userInfoSession, getUserName, newUser,checkOut, changeUserName }
})
