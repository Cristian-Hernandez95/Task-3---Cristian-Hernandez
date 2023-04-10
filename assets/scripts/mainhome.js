let containerjs = document.getElementById('main5')
let checkboxes = document.getElementById('checkboxes')
let search = document.getElementById('searchbutton')
let texto = document.getElementById('searchinput')

let events = data.eventos

function cards(listadata) {
    containerjs.innerHTML = ""
    if(listadata.length > 0){
        listadata.forEach(card => {
            let div = document.createElement('div')
            div.className = 'card'
            div.style = 'width:18rem;'
            div.innerHTML = `<div class="card " style="width: 18rem; height: 25rem">
            <img class = "card-img-top" src="${card.image}" alt="museo">
            <div class="card-body">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.description}</p>
                <div class="d-flex justify-content-lg-between">Price : ${card.price}</p><a href="./pages/details.html?id=${card.id}" class="btn btn-primary">Details</a></div>
            </div>
            </div>`
            
            containerjs.appendChild(div)     
        })
    }else {
        let div = document.createElement('div')
            div.innerHTML = `<h3>No se encontraron eventos</h3>`
            containerjs.appendChild(div)
    }  
}
cards(events)

function searchText(texto, listadata) {
    let arrayFiltrado = listadata.filter(card => card.name.toLowerCase().includes(texto.toLowerCase()) || card.description.toLowerCase().includes(texto.toLowerCase()) || card.date.includes(texto))
    return arrayFiltrado
}

search.addEventListener('click', () => {
     let listafiltradocheck = filterChecks(events)
     let listafiltradotext = searchText(texto.value, listafiltradocheck)
     cards(listafiltradotext)
 })

texto.addEventListener('keyup', () => {
    let arrayFilterCheck = filterChecks(events)
    let arrayFilterText = searchText(texto.value, arrayFilterCheck)
    cards(arrayFilterText)
})

function renderCheckBoxes() {
    let categories = []
    events.forEach(eventos => {
        if (!categories.includes(eventos.category)) {
            categories.push(eventos.category)
        }
    })
    checkboxes.innerHTML = ''
    categories.forEach(categoria => {
        let checkBox = document.createElement('div')
        checkBox.className = 'form-check form-check-inline'
        checkBox.innerHTML = `<input class="form-check-input" type="checkbox" id="${categoria}" value="${categoria}">
        <label class="form-check-label" for="${categoria}">${categoria}</label>`
        checkboxes.appendChild(checkBox)
    })
}
renderCheckBoxes()


let checks = document.querySelectorAll("input[type='checkbox']")
checks.forEach(checkCategory => {
    checkCategory.addEventListener('change', () => {
        let arrayFilterText = searchText (texto.value, events)
        let arrayFilterCheck = filterChecks(arrayFilterText)
        cards(arrayFilterCheck)
    })
})


function filterChecks(listadata) {
    let checkboxs = document.querySelectorAll("input[type='checkbox']")
    let listacheck = Array.from(checkboxs)
    let checksChecked = listacheck.filter(check => check.checked)
    let categories = checksChecked.map(checkChecked => checkChecked.value)
    if(categories.length > 0){
        let arrayFiltrado = listadata.filter(card => categories.includes(card.category)) 
        return arrayFiltrado
    }
    return listadata   
}

