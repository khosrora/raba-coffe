// ! GET ITEMS
const question = document.getElementById("question")
const menu = document.getElementById("menu")
const closeMenu = document.getElementById("close")
console.log(closeMenu);
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
    console.log("object");
    if (menu.style.display !== "none") {
        menu.style.display = "none";
    }
}
