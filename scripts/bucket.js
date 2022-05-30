// On clicking remove button the item should be removed from DOM as well as localstorage.
var data = JSON.parse(localStorage.getItem("coffee"))
console.log(data)

var total = data.reduce(function(sum,el,index,arr){
    return sum + Number(el.price)
})


data.forEach(function(el,index){
        

    let title = document.createElement("p")
    title.innerText = el.title

    let price = document.createElement("p")
    price.innerText = el.price

    let image = document.createElement("img")
    image.src = el.image

    let button = document.createElement("button")
    button.setAttribute = "remove_coffee"
    button.innerText = "remove"
    button.addEventListener("click",function(){

        removeTobucket(el,index)
    })
    
    let div = document.createElement("div")
    div.append(image,title,price,button)

    // document.querySelector("#items").append(div)

    items.append(div)
})

 function  removeTobucket(el,index){
     data.splice(index,1)

     localStorage.setItem("coffee",JSON.stringify(data))
     window.location.reload()

 }