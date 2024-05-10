async function meowData(){
    let res = await fetch("https://meowfacts.herokuapp.com/?count=10")
    let value = await res.json()
    let data = value.data

    let contnr = document.createElement("container")
    contnr.className = "container"
    let row = document.createElement("row")
    row.className="row"


    console.log(data)
    for(var i=0;i<value.data.length;i++){
        console.log(data[i])
        var col = document.createElement("div")
        col.className = "col-md-5"
        col.innerHTML = `<div class="card bg-primary text-white text-center p-3" style="margin:10px; font-size:10px">
        <blockquote class="blockquote mb-0">
          <p>${data[i]}</p>
          <footer class="blockquote-footer text-white">
            <small>
              <cite title="Meow">Meow</cite>Facts
            </small>
          </footer>
        </blockquote>
      </div>`

      row.appendChild(col)
      contnr.appendChild(row)
      document.body.append(contnr)
    }
}

meowData()