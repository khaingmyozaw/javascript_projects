// Get Ui
const input = document.querySelector('input');
const img = document.querySelector('img');
const p = document.querySelector('p');
let qr_link = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

input.focus();
function generateQR() {
    img.style.display = "inline-block";
    let value = qr_link + input.value;
    img.src = value;
    p.innerHTML = input.value;
    input.value = "";
}
document.addEventListener("keydown", function(event)
{
    if(event.key === "Enter") {
        generateQR();
    }
});