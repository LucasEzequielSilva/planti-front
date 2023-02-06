let url = "https://planti.onrender.com/api/plantas"
let container = document.getElementById("container")
let data
const getData = async() =>{
    try {
        data = await fetch(url).then(data=>data.json()).then(data=>data.data)
        printCards(container, data)
    } catch (error) {
        console.log(error)   
    }
}

const printCards=(container, array)=>{

    array.forEach(card =>{
        container.innerHTML +=  ` 
        <div style="width:10rem; height:15rem;" class="d-flex flex-column gap-2">

        <img photoProduct class="flex-grow-1" style="width:100%; height:50%; object-fit:cover;" src="${card.photo[0]}" alt="${card.name}"/>
        <div class="d-flex justify-content-between">
        <p class="text-dark">${card.name}</p>
        <p class="text-dark">$${card.price}</p>
        </div>

        </div>
        `
        let photoProduct = document.querySelector("[photoProduct]")
        photoProduct.addEventListener("mouseover",  () => {
            photoProduct.src = card.photo[1]
            console.log("atroden")
            console.log(card)
        })
        photoProduct.addEventListener("mouseout",  () => {
            photoProduct.src = card.photo[0]
            console.log("arafue")

        })
    })
    
}
getData()