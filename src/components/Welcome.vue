<template>
  <div class="welcome">
    <img :class="getLogoImageClass()" alt="Logo de afaya que consiste en el nombre junto con un perro sosteniendo la A" src="../assets/logoAfaya.jpg">
    <h1>Mi Menú</h1>
    <p>
      La aplicación que te ayuda a crear menús variados para el colon irritable.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  },
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
      getLogoImageClass() {
        return this.isMobile ? 'mobileLogoImage' : 'laptopLogoImage'
    },
  }
}
</script>

<style scoped>
    .mobileLogoImage{
        width:90vw;
    }

    img{
        margin-top:10vh;
        margin-bottom:5vh;
    }
</style>