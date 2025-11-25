let button = document.getElementById("btn")
// List o all maouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b> Yayy you are clicked</b> Enjoy your click!" 
})

button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us Right click please")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})