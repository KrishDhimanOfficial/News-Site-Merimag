var search_btn = document.querySelector("#search");
var target = document.querySelector("#searchbox");

search_btn.addEventListener("click", ()=>{
    target.classList.toggle("active");
});

// news masonry

var images = ["masonry-1.jpeg","masonry-2.jpeg","masonry-3.jpeg","masonry-4.jpeg","masonry-5.jpeg","masonry-6.jpeg"];
var colors = ["red","green","purple","blue","orange","yellow","lightblue"]
var get_src = document.querySelectorAll(".news_img");
var set_prop = document.querySelectorAll(".news");


var i = 0;
get_src.forEach(get_src =>{
    get_src.setAttribute("src",`images/${images[i]}`);
    i < images.length ? ++i : false;
});
var elem = document.querySelector(".news");
var b = window.getComputedStyle(elem,"::before");
var getvalue = b.getPropertyValue("background-image");
console.log(getvalue);

set_prop.forEach(set_prop =>{
    console.log(colors);
    set_prop
    // .setProperty("background-image",`linear-gradient(138deg , transparent, ${colors})`);
});
