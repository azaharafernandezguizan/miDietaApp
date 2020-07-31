import axios from 'axios';

const menuService = {
    async setNewMenu(numberOfMeals, numberOfProcessedMeals, numberOfFruits){
        let conditionsToSend ={
            numberOfMeals : numberOfMeals,
            numberOfFruits: numberOfFruits,
            numberOfProcessedFood: numberOfProcessedMeals
        };
    
        const clientResponse = await axios.post('http://localhost:7700/conditions', conditionsToSend,{
            headers: {
               'Access-Control-Allow-Origin': '*'  
            }
          });
        return clientResponse.statusText == "OK";

        // axios({
        //     method: "post",
        //     url: "http://localhost:7700/conditions",
        //     data: conditionsToSend,
        //     headers: { "Content-Type": "multipart/form-data" },
        //   })
        //     .then(function (res) {
        //       console.info(res.data);
        //       return true;
        
        //     })
    },
  
    async getCurrentMenu(){
        const clientResponse = await axios.get('http://localhost:7700/menu');
        return clientResponse.data;
    }

};

export default menuService;