// simple navbar shadow on scroll
window.addEventListener("scroll", function(){
const nav = document.querySelector(".navbar");

if(window.scrollY > 50){
nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.3)";
}else{
nav.style.boxShadow = "none";
}
});
