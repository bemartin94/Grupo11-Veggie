/*  const getNutricion = async() =>{
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
let searchButton = document.querySelector("#search")
searchButton.addEventListener ("click", () => {
    console.log("boton presionado")
    sendApiRequest()
}) 
async function sendApiRequest(){
    let APP_ID = "de706feb"
    let API_KEY ="761fd138a65aa9fd7a501776fade0653"
    let response = await fetch (`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${API_KEY}&ingr=1%20large%20apple`);
    console.log(response)
    let data = await response.json()
    console.log(data)
}

function useApiData(data){
    document.querySelector("#content").innerHTML=/*html*/`
    <div>
        <h1> Valor Nutricional</h1>
        <h3>${data.calories}</h3>
        <p>dieta ${data.dietLabels}</p>
    </div>
    `
}

