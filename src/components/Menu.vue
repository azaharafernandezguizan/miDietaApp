<template>
  <div class="welcome">
    <h1>Tu Menú</h1>
    <div :class="getDayGroupClass()">
      <div v-for="item in menuInfo" v-bind:key='item.day'>
      <h3>{{item.day}}</h3>
      <div v-for="meal in item.meals" v-bind:key='meal.name'>
          <h4>{{meal.name}}</h4>
          <span>{{meal.menu}}</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import menuService from '../services/menuServices';

export default {
  name: 'Menu',
  props: {
    msg: String
  },
  data: function(){
    return{
      menuInfo: []
    }
  },
  async created() {
    this.menuInfo = await menuService.getCurrentMenu();
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
      getDayGroupClass() {
        return this.isMobile ? 'daysWithMenu menuMobile' : 'daysWithMenu menuLaptop'
    },
      
  }
}
</script>
<style scoped>
    h3{
      background-color: #FFDBCC;
    }

    .menuLaptop{
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-row-gap: 10vh;
    }

    .menuLaptop div{
      width: 20vw;
      margin: auto;
    }
</style>