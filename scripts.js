
/*document.getElementById("BtnForm").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("modal-box").classList.toggle("show");
}*/

function fade() {
    const modalbox = document.getElementById('modal-box');
    const overlay = document.getElementById('overlay-container');
    console.log('here');
    modalbox.classList.toggle('fade');
    overlay.classList.toggle('overlay');

}
