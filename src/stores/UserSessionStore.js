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

    //ACTION

      function newUser(name){

        const userObject={
            "name":name,
            "gitHub":"",
            "carrito":[]
        }

        if(name !=null){

          userInfoSession.value.push(userObject) 
          user=userInfoSession
          return true

        }
        return false
    }

    function buscarUsuario(name){

        const userFound=userInfoSession.value.find(name)

        if(userFound !=null){
          return userFound
        }else{
          return false
        }
    }
    

  return {userInfoSession, fill, newUser,buscarUsuario  }
})
