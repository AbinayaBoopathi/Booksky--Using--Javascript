var btn = document.getElementById("add-popup-button")
var overlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

btn.addEventListener("click",function(){
    overlay.style.display="block";
    popupbox.style.display="block";
})

var cancelpopup = document.getElementById("cancel-popup");
cancelpopup.addEventListener("click",function(){
    event.preventDefault()
    overlay.style.display="none";
    popupbox.style.display="none";
})
//select overall containe,addbook,
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthor = document.getElementById("book-author-input")
var bookdescription = document.getElementById("book-description-input")


addbook.addEventListener("click",function(event){
    event.preventDefault();
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none";
    popupbox.style.display="none";
})
function deletebook(event){
    event.target.parentElement.remove();
}

