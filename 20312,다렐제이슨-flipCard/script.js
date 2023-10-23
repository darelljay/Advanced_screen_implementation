const card = document.querySelectorAll(".wrap>div");

card.forEach(Element=>{
    Element.addEventListener("click",(e)=>{
        Element.firstElementChild.classList.toggle("flip")
        Element.firstElementChild.lastElementChild.classList.toggle("rotate")
    })
})

