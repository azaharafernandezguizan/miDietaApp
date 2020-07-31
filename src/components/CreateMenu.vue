<template>
  <div class="welcome">
    <h3>Configura tu Menú</h3>
    <div :class="getExplanationDivClass()">
        <span>El menú se creará con las siguientes características</span>
        <ul>
            <li>Sin gluten</li>
            <li>Sin lactosa</li>
            <li>Sin frutos secos</li>
            <li>Con los alimentos de buena tolerancia FODMAP</li>
        </ul>
    </div>
    <div class="enterDataDiv">
        <h4> Selecciona los siguientes datos </h4>
        <div :class="getDivWithSelectsClass()">
            <label for="selectNumberMeals">Selecciona número de comidas diarias</label>
        <select name="selectNumberMeals" v-model="numberOfMeals">
            <option v-for="option in mealOptions" v-bind:key='option.value'>
                {{ option.text }}
            </option>
        </select>

        <label for="selectNumberProcessedMeals">Selecciona número de comidas procesadas semanales</label>
        <select name="selectNumberProcessedMeals" v-model="numberOfProcessedMeals">
            <option v-for="option in processedMealsOptions" v-bind:key='option.value'>
                {{ option.text }}
            </option>
        </select>

        <label for="selectNumberFruits">Selecciona número de frutas/vegetales diarias</label>
        <select name="selectNumberFruits" v-model="numberOfFruitsAndVegetables">
             <option v-for="option in vegetableOptions" v-bind:key='option.value'>
                {{ option.text }}
            </option>
        </select>

        <button v-on:click="onClickCreateMenu">Crear menú</button>
        </div>
    </div>
    
  </div>
</template>
np
<script>
import menuService from '../services/menuServices';

export default {
  name: 'Menu',
  props: {
    msg: String
  },
  data: function() {
      return {
            numberOfMeals : null,
            numberOfProcessedMeals : null,
            numberOfFruitsAndVegetables: null,
            mealOptions: new Array(
                { text: 'Sólo comida', value: 1 },
                { text: 'Desayuno y comida', value: 2 },
                { text: 'Desayuno, comida y cena', value: 3 }
            ),
            processedMealsOptions: [
                { text: 'Una', value: 1 },
                { text: 'Dos', value: 2 },
            ],
            vegetableOptions: [
                { text: 'Una', value: 1 },
                { text: 'Dos', value: 2 },
                { text: 'Tres o más', value: 3 },
            ]
      }
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
    getDivWithSelectsClass() {
        return this.isMobile ? 'enterDataDiv_selects mobileSelects' : 'enterDataDiv_selects laptopSelects'
    },
    getExplanationDivClass(){
        return this.isMobile ? 'explanationDiv mobileExplanation' : 'explanationDiv laptopExplanation'
    },
    onClickCreateMenu() {
         const meals = this.numberOfMeals != null 
                        ? this.mealOptions.filter(meal => meal.text == this.numberOfMeals)[0].value 
                        : null;
         const fruits = this.numberOfFruitsAndVegetables != null 
                        ? this.vegetableOptions.filter(vege => vege.text == this.numberOfFruitsAndVegetables)[0].value 
                        : null;
         const processed = this.numberOfProcessedMeals != null 
                        ? this.processedMealsOptions.filter(processed => processed.text == this.numberOfProcessedMeals)[0].value 
                        : null;
         const isMenuCreated = menuService.setNewMenu(meals, processed, fruits); 
        if(isMenuCreated){
            this.$router.push('menu');
        }
        else{
            alert("No se ha podido crear el menú");
            this.numberOfProcessedMeals = null;
            this.numberOfMeals = null;
            this.numberOfFruitsAndVegetables = null;
        }
    }
      
  }
}
</script>
<style scoped>
    h1{
        text-align:center;
    }

    .explanationDiv, .enterDataDiv{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .enterDataDiv_selects{
        display: flex;
        flex-direction: column;
        align-items: start;
    }

    .mobileSelects{
        width:78vw;
    }

    .laptopSelects{
        width: 18vw;
    }

    .enterDataDiv_selects select{
        width: 100%;
        height: 4vh;
    }

    .laptopExplanation{
        margin-bottom:3vh;
    }

    ul{
        list-style: none
    }

    .laptopSelects select{
        margin-bottom:5vh;
    }

    .mobileSelects select{
        margin-bottom:3vh;
    }

    button{
        background-color: #FCB9AA;
        border-radius: 5%;
        height: 5vh;
        width: 100%;
    }

</style>