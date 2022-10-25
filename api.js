async function sendApiRequest(){
    let APP_ID = "de706feb"
    let API_KEY ="761fd138a65aa9fd7a501776fade0653"
    let response = await fetch (`https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${API_KEY}&ingr=1%20large%20apple`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    return data
} 


async function useApiData(){
    data = await sendApiRequest()
    document.querySelector("#content").innerHTML= /*html*/`
    <div class="card-body">
        <h3> Valor Nutricional</h3>
        <p>Calorias: ${data.calories}</p>
        
    </div>
    `
}

useApiData()

