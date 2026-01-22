<script setup>

</script>

<template>

<header>
    <div id="header-content">
        <di>
            <h1>TechBuilds</h1>
        </di>
        <div id="div-user-info">
            <p>USerName</p>
            <button>cart</button>
        </div>
    </div>
</header>
</template>

<style scoped>

header{
    width: 100%;
    background-color: cadetblue;
    height: auto;
}
#header-content{
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#div-user-info{

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}

#div-user-info > button{
    margin-left: 20px;
   
}
</style>