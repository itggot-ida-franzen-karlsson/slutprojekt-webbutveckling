function toggleMenu() {
    var menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    var arrow = document.getElementById("menuExpandArrow");
    if (arrow.style.transform === "rotate(180deg)") {
        arrow.style.transform = "";
    } else {
        arrow.style.transform += "rotate(180deg)";
    }
}