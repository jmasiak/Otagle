// GET ELEMENT
const btn = document.querySelector('.Options');
const About = document.querySelector(".About");
const btnOk = document.querySelector(".btnOk");
const toggleOrederButtons = document.querySelector(".Order");
// ADD Events
btn.addEventListener('click', ToggleClas);
window.addEventListener("keyup", function (event) {
    if (event.which == 121 || event.keyCode == 121) {
        ToggleClas()
        return false;
    }
    return true;
});
About.addEventListener('click', displayAlert)
btnOk.addEventListener('click', closeAlert)
// Open/Coles MenuBar
function ToggleClas() {
    const menu = document.querySelector('.menu-bar');
    menu.classList.toggle('active');
}
// Display and Close About
function displayAlert() {
    const AboutBox = document.querySelector('.AboutBox');
    AboutBox.classList.add('active');
}
function closeAlert() {
    const AboutBox = document.querySelector('.AboutBox');
    AboutBox.classList.remove('active');
}
// Arrangement Buttosn
toggleOrederButtons.addEventListener('click', changeOrder)

function changeOrder() {
    const Buttosn = document.querySelectorAll('.box_item');
    for (let index = 0; index < Buttosn.length; index++) {
        Buttosn[index].classList.toggle('stopResize')
    }
    const off = document.querySelector('.fa-toggle-off');
    const on = document.querySelector('.fa-toggle-on');
    off.classList.toggle('off');
    on.classList.toggle('active');

}

// const e1 = document.getElementById("E1");
// e1.setAttribute("font-size", "8px")
// e1.setAttribute("fill", "yellow")
// console.log(e1);