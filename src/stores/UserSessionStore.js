import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import user from '@/data/userData.json'

export const userSessionStore = defineStore('userInfo', () => {
 
    //STATE

    const userInfoSession=ref([])
    //GETTERS

    //Función para obtener los datos de json 
    function fill(){
        userInfoSession.value=user
    }

    function newUser(name){

        const userObject={
            "name":name,
            "carrito":[]
        }

        if(name !=null){

          user.push(userObject) 
          return true

        }

        return false
    }

    //ACTION
    

  return {userInfoSession, fill, newUser  }
})
