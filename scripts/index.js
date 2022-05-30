// Add the coffee to local storage with key "coffee"
// let  data = []

const url = `https://masai-mock-api.herokuapp.com/coffee/menu`

// const items  = document.getElementById("items")

// fetch (url)
// .then(function(res){
//     return res.json()
// })

// .then(function(res){
//     console.log(res)
// })
// .catch(function(err){
//     console.log("err",err)
// })

async function getData(){
    try{
        let res = await fetch(url)

        let coffee = await res.json();

        append(coffee.menu.data)
        console.log(coffee.menu.data)
    }
    catch(err){
        console.log(err)
    }
}
getData()

 function append(data){
     let items = document.getElementById("items")
    data.forEach(function(el){
        

        let title = document.createElement("p")
        title.innerText = el.title

        let price = document.createElement("p")
        price.innerText = el.price

        let image = document.createElement("img")
        image.src = el.image

        let button = document.createElement("button")
        button.innerText = "Add to Bucket"
        button.addEventListener("click",function(){

            addTobucket(el)
        })
        let div = document.createElement("div")
        div.append(image,title,price,button)

        // document.querySelector("#items").append(div)

        items.append(div)
    })

    function addTobucket(el){
        console.log(el)
        data.push(el)
        localStorage.setItem("coffee",JSON.stringify(data))
    }
}