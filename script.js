async function apiCall(){
    try{
    let api_response = await fetch("https://www.amiiboapi.com/api/amiibo/")
    let api_content = await api_response.json()
    let amiibo_data = api_content.amiibo

    console.log(amiibo_data)

    let parent_div = document.createElement("div")
    parent_div.className = "par_div"

    let container = document.createElement("container")
    container.className="container"

    let row = document.createElement("row")
    row.className = "row"
    
    for(let i=0;i<amiibo_data.length;i++){
        let col = document.createElement("col-md-4")
        col.className = "col"
        col.innerHTML = `<div class="card mb-3">
        <div class="card-body">
        <h3 class="card-title">${amiibo_data[i].amiiboSeries}</h3>
        <p class="card-text">Character: ${amiibo_data[i].character} <br>
        </p>
        </div>
            <img src=${amiibo_data[i].image} class="card-img-bottom" alt="">
        </div>`

        row.appendChild(col)
        container.appendChild(row)
        document.body.append(parent_div,container)
        }
    }catch(error){
        console.log(error)
    }
}

apiCall()