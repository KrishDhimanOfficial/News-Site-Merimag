var search_btn = document.querySelector("#search");
var target = document.querySelector("#searchbox");

search_btn.addEventListener("click", () => {
    target.classList.toggle("active");
});

// news masonry
const colors = ["red", "green", "purple", "blue", "orange", "#7fe5f0", "salmon"];
const set_prop = document.querySelectorAll("#news_masonary .news");

var i = 0;
set_prop.forEach(set_prop => {
    set_prop.style.setProperty("background-image", `linear-gradient(127deg , transparent, ${colors[i]})`);
    i < colors.length ? ++i : false;
});

// NAVBAR LINKS
var nav_links = document.querySelectorAll("#primary-menu li a");

nav_links.forEach(links => {
    links.addEventListener("click", (e) => {
        e.stopPropagation();
        for (var i = 0; nav_links.length; ++i) {
            if (nav_links[i] != links) {
                nav_links[i].classList.remove("active");
            }
            else {
                links.classList.add("active");
            }
        }
    });
});

// scoial media
var links_colors = ["#647aad", "#7abdf2", "#d95250", "#b0968b", "#d95050", "#5cc5ee"];
var scoial_media = document.querySelectorAll(".scoial_media i");

var i = 0;
scoial_media.forEach(scoial_media => {
    scoial_media.style.backgroundColor = `${links_colors[i]}`;
    i < links_colors.length ? ++i : false;
});

var fixed = document.querySelector("#s_media");
var left = fixed.getBoundingClientRect().left;

const stickyNav = document.querySelector("#navbar");
window.addEventListener("scroll", () => {
    var top = window.scrollY;
    console.clear();
    console.log(top)
});

// tabs links
const tab_button = document.querySelectorAll(".tabs_links button");

tab_button.forEach(btn => {
    btn.addEventListener("click", () => {
        var tab_name = btn.dataset.tab;
        var tab_content = document.querySelector(`#${tab_name}`);
        var alltab_content = document.querySelectorAll('.tab_content');
        
        for (let i = 0; i <= tab_button.length; ++i) {
            if (tab_button[i] != btn) {
                tab_button[i].classList.remove("active");
                alltab_content[i].style.display = 'none';
            }
            else{
                tab_button[i].classList.add("active");
                tab_content.style.display = 'block';
            }
        }
    });
});



