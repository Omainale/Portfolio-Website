window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function(){
window.scrollTo(0,0)
})

window.onload = function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}

let icons = document.querySelectorAll(".right ul li a i");

icons.forEach(icon => {

icon.addEventListener("click", function(){

icons.forEach(i => i.classList.remove("active"));

this.classList.add("active");

});

});