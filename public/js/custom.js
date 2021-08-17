// ! GET ITEMS
const body = document.querySelector("body")
const question = document.getElementById("question")
const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close")
const loader = document.querySelector(".loader")


// ! SHOW MENU
question.onclick = () => {
    if (menu.style.display !== "none") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
// ! CLOSE MENU
closeMenu.style.cursor = "pointer"
closeMenu.onclick = () => {
    if (menu.style.display !== "none") {
        menu.style.display = "none";
    }
}



// ! Particles 
window.
    onload
    = function () {
        Particles.
            init
            ({
                selector:
                    '.background',
                color: "#45526C",
                maxParticles: 20
            });
    };

// !Loader
window.addEventListener("load", function () {
    loader.className += " hidden";
});

// !Tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}