<template>
  <nav class="navigationBar">
      <router-link to="/menu" :class="getNavLinksClass()">Ver menú</router-link>
      <router-link to="/newmenu" :class="getNavLinksClass()">Crear menú</router-link>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  computed:{
    isMobile : function() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
        } else {
            return false
        }
      }
  },
  methods:{
      getNavLinksClass() {
        return this.isMobile ? 'navLinks mobileLinks' : 'navLinks laptopLinks'
    } 
  }
}
</script>
<style scoped>
    .navigationBar {
        margin-bottom:5vh;
        background-color: #FF968A;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
    }

    .navLinks {
        text-decoration: none;
        margin-right: 5vw;
        color: #2c3e50;
        font-size: 1.5em;
        height: 5vh;
    }

    .laptopLinks{
        margin-top: 5vh;
    }

    .mobileLinks{
        margin-top: 2.5vh;
    }

    .mobileLinks:first-child{
        margin-right:5vw;
    }

    .router-link-active{
        color: #FFDBCC;
    }
</style>