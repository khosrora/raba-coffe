// ! GET ITEMS
const question = document.getElementById("question")
const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close")

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