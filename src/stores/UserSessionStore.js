import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const userSessionStore = defineStore('userInfo', () => {

  //STATE

  const userInfoSession = ref({
    "name": localStorage.getItem("user") || "GuestBuilder",
    "github": localStorage.getItem("userLink") || "https://github.com"
  })
 
 //ACTION

  function newUser(name = "GuestBuilder",link="https://github.com") {

    //Actualizo el objeto y se rendeiza la página
    userInfoSession.value = {
      "name": name,
      "github": link,
    }

    localStorage.setItem("user", name)
    localStorage.setItem("userLink", link)
  }

  function changeUserName(newName) {
    userInfoSession.value.name = newName
    localStorage.setItem("user", newName)
  }

  return { userInfoSession, newUser, changeUserName }
})
