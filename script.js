let main = document.querySelector(".page1")
let cursor = document.querySelector(".cursor")
let page1 = document.querySelector(".page1")

let sendbtn = document.querySelector(".sendbtn")

main.addEventListener("mousemove", function(val){
    cursor.style.left = val.x + "px"
    cursor.style.top = val.y + "px"
})

page1.addEventListener("mouseenter", function(){
    cursor.style.opacity = 1
    cursor.style.width = "2vw";
    cursor.style.height = "4vh";
})

page1.addEventListener("mouseleave", function(){
    cursor.style.opacity = 0
    cursor.style.width = "0px"
    cursor.style.height = "0px"
})


sendbtn.addEventListener("mouseenter", function(){
    sendbtn.style.scale = 1.2
})
sendbtn.addEventListener("mouseleave", function(){
    sendbtn.style.scale = 1
})