const card = document.querySelectorAll(".card");
window.addEventListener("load",(e)=>{
card.forEach(element=>{
    element.classList.add("active")
})
})