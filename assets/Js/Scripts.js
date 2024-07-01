const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
$(document).ready(function () {
    let btnEnviarMensaje = $("#enviarMensaje");
    btnEnviarMensaje.click(function () {
        alert("El mensaje fue enviado correctamente...");
    });  
});