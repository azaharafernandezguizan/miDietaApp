const menuService ={
    setNewMenu(numberOfMeals, numberOfProcessedMeals, numberOfFruits){
        console.log("valores recibidos: "+ numberOfMeals + " "+ numberOfProcessedMeals+ " "+numberOfFruits);
        //TODO: si la llamada al back no va bien devolver false;
        return true;
    },
    getCurrentMenu(){
        return [
            {
                Day: 'Lunes',
                Meals: [
                    {
                        Name: 'Desayuno',
                        Menu: 'Carne a la plancha con bollito de pan e infusión'
                    },
                    {
                        Name: 'Comida',
                        Menu: 'Pescado al horno con ensalada de tomates y yogur'
                    }
                ]
            },
            {
                Day: 'Martes',
                Meals: [
                    {
                        Name: 'Desayuno',
                        Menu: 'Carne a la plancha con bollito de pan e infusión'
                    },
                    {
                        Name: 'Comida',
                        Menu: 'Arroz con salmón y calabacín y yogur'
                    }
                ]
            },
            {
                Day: 'Miercoles',
                Meals: [
                    {
                        Name: 'Desayuno',
                        Menu: 'Carne a la plancha con bollito de pan e infusión'
                    },
                    {
                        Name: 'Comida',
                        Menu: 'Carne con patatas cocidas y fruta'
                    }
                ]
            },
            {
                Day: 'Jueves',
                Meals: [
                    {
                        Name: 'Desayuno',
                        Menu: 'Carne a la plancha con bollito de pan e infusión'
                    },
                    {
                        Name: 'Comida',
                        Menu: 'Ensalada cesar y yogur'
                    }
                ]
            },
            {
                Day: 'Viernes',
                Meals: [
                    {
                        Name: 'Desayuno',
                        Menu: 'Carne a la plancha con bollito de pan e infusión'
                    },
                    {
                        Name: 'Comida',
                        Menu: 'Pasta carbonara y fruta'
                    }
                ]
            },
            {
                Day: 'Sabado',
                Meals: [
                    {
                        Name: 'Desayuno',
                        Menu: 'Galletas e infusión'
                    },
                    {
                        Name: 'Comida',
                        Menu: 'Pizza casera y helado'
                    }
                ]
            },
            {
                Day: 'Domingo',
                Meals: [
                    {
                        Name: 'Desayuno',
                        Menu: 'Bizcocho de manzana y achicoria'
                    },
                    {
                        Name: 'Comida',
                        Menu: 'Empanada de atún y helado casero'
                    }
                ]
            },

            
        ];
    }

};

export default menuService;