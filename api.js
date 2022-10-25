/* const getNutricion = async() =>{
    try{
        let APP_ID = "de706feb"
        let API_KEY ="761fd138a65aa9fd7a501776fade0653"
        const res = await fetch (`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${API_KEY}&ingr=1%20large%20apple`)
        const jsonPost = await res.json()
        console.log(jsonPost)
    }catch(error){
        console.warn(error);
    }
}

getNutricion()  */

/* const getNutricion = () =>{
    let APP_ID = "de706feb"
    let API_KEY ="761fd138a65aa9fd7a501776fade0653"
    fetch (`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${API_KEY}&ingr=1%20large%20apple`)

    .then((res) => {
        return res.json()
    })
    .then ((jsonPost) =>{
        console.log("Ejemplo")
        console.log(jsonPost.calories)
        console.log(jsonPost.totalWeight)
        console.log(jsonPost.dietLabels)
        })
}

getNutricion() */

/* let searchButton = document.querySelector("#search")
searchButton.addEventListener ("click", () => {
    console.log("boton presionado")
    sendApiRequest()
}) */
async function sendApiRequest(){
    let APP_ID = "de706feb"
    let API_KEY ="761fd138a65aa9fd7a501776fade0653"
    let response = await fetch (`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${API_KEY}&ingr=1%20large%20apple`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    return data
} 

/* const useApiData=(data) =>{
    document.getElementById('content').innerHTML=/*html*`
    <div>
        <h1> Valor Nutricional</h1>
        <h3>Calorias: ${data.calories}</h3>
        <p>Dieta: ${data.dietLabels}</p>
    </div>
    `
}   */

async function useApiData(){
    data = await sendApiRequest()
    document.querySelector("#content").innerHTML= /*html*/`
    <div class="card-body">
        <h1> Valor Nutricional</h1>
        <h3>Calorias: ${data.calories}</h3>
        <p>Dieta: ${data.dietLabels}</p>
    </div>
    `
}

useApiData()
/* const {createApp} = Vue 
createApp({
    
    data(){
        return {
            url: 'https://api.edamam.com/api/nutrition-data?app_id=de706feb&app_key=761fd138a65aa9fd7a501776fade0653&ingr=1%20large%20apple',
            valores: []
        }
    },
    methods:{
        async fetchData(url){
            const res = await fetch(url);
            data = await res.json();
            this.valores = data.results;
            console.log(valores)
        }
    },
    async created(){
        await this.fetchData(this.url)
    }
}).mount('#app')  */
