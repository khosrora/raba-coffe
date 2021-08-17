// ! GET ITEMS
const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")
const price = document.getElementById("price")


// !Set Price
num1.onclick = () => {
    price.value = "20000"
}
num2.onclick = () => {
    price.value = "40000"
}
num3.onclick = () => {
    price.value = "60000"
}