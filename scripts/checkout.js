document.querySelector("#order-form").addEventListener("submit",myFunction)

function myFunction(){
    event.preventDefault()
    var na = document.querySelector("#name").value
    var nu = document.querySelector("#number").value
    var ad = document.querySelector("#address").value

    console.log(na,nu,ad)
    

}