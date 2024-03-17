
document.getElementById("red").addEventListener("click", () => {
    document.getElementById("right_side").style.display = "flex";
    document.getElementById("text").innerHTML = "Красный";
    document.getElementById("text").style.color = "red";
});

document.getElementById("green").addEventListener("click", () => {
    document.getElementById("right").style.display = "flex";
    document.getElementById("text").innerHTML = "Зеленый";
    document.getElementById("text").style.color = "green";
});

document.getElementById("orange").addEventListener("click", () => {
    document.getElementById("right").style.display = "flex";
    document.getElementById("text").innerHTML = "Оранжевый";
    document.getElementById("text").style.color = "orange";
});

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("right").style.display = "none";
});

