function showForm(formId, button){

    // Ocultar formularios

    const forms =
    document.querySelectorAll('.form-section');

    forms.forEach(form => {
        form.classList.remove('active');
    });

    // Mostrar formulario seleccionado

    document
    .getElementById(formId)
    .classList.add('active');

    // Cambiar botón activo

    const buttons =
    document.querySelectorAll('.option-btn');

    buttons.forEach(btn => {
        btn.classList.remove('active-btn');
    });

    button.classList.add('active-btn');
}

function processDonation(){

    const modal =
    document.getElementById("successModal");

    const loading =
    document.getElementById("loadingContent");

    const success =
    document.getElementById("successContent");

    modal.style.display = "flex";

    loading.style.display = "block";

    success.style.display = "none";

    setTimeout(() => {

        loading.style.display = "none";

        success.style.display = "block";

    }, 2000);
}