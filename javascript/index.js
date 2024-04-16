var search_btn = document.querySelector("#search");
var target = document.querySelector("#searchbox");

search_btn.addEventListener("click", ()=>{
    target.classList.toggle("active");
});

// news masonry
const colors = ["red","green","purple","blue","orange","lightblue"];
const set_prop = document.querySelectorAll("#news_masonary .news");

var i = 0;
set_prop.forEach(set_prop => {
    set_prop.style.setProperty("background-image", `linear-gradient(138deg , transparent, ${colors[i]})`);
    i < colors.length  ? ++i : false;
});

// scoial media
var links_colors = ["#647aad","#7abdf2","#d95250","#b0968b","#d95050","#5cc5ee"];
var scoial_media = document.querySelectorAll(".scoial_media i");

var i = 0;
scoial_media.forEach(scoial_media =>{
    scoial_media.style.backgroundColor = `${links_colors[i]}` ;
    i < links_colors.length ? ++i :false;
});

var fixed = document.querySelector("#s_media");
window.addEventListener("scroll",()=>{
    var top = window.scrollY;
    var left = fixed.offsetLeft;
    console.clear();
    console.log();
    
    if( top >= 904 && top <= 1750){
        fixed.classList.add("fixed");
        fixed.style.top =`${0}px`;
        fixed.style.left =`${left}px`;
    }
    else{
        fixed.classList.remove("fixed");
    }
});




