let events = data.eventos
let containerdetails = document.getElementById('containerdetails')

function Detail (listadata){
    containerdetails.innerHTML = ""
    let id = location.search.slice(4)
    let detail = listadata.filter(e => e.id==id)
    detail.forEach(card => {
            let div = document.createElement('div')
            div.className = 'card mb-3 mx-auto w-75'
            div.style = 'width:18rem;'
            div.innerHTML =`<div class="row g-0">
            <div class="col-md-5">
              <img src="${card.image}" class="img-fluid rounded-start" style="width:100%; height: 360px; object-fit: cover;" alt="${card.name}">
            </div>
            <div class="col-md-7">
              <div class="ms-5 mt-4 card-details">
                <h5 class="card-title">${card.name}</h5>
                <p class="card-text">${card.description}</p>
                <p class="card-text"><small class="text-muted">Date: ${card.date}</small></p>
                <p class="card-text"><small class="text-muted">Place: ${card.place}</small></p>
                <p class="card-text"><small class="text-muted">Capacity: ${card.capacity}</small></p>
                <p class="card-text"><small class="text-muted">Assist: ${card.assistance || card.estimate} </small></p>
                <p class="card-text"><small class="text-muted">Price: $${card.price}</small></p>
              </div>
            </div>
          </div>` 
          containerdetails.appendChild(div)    
})} 

Detail(events) 