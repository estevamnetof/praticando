const fields = document.querySelectorAll('[required]');

// console.log(fields)

function customValidation(event) {
    const field = event.target;

    // logica para verificar se existem erros
    function verifyErrors() {
        let foundError = false;

        for(error in field.validity) {

        }

        return foundError;
    }

    // Trocar mensagem de required
    field.setCustomValidity('Esse campo é obrigatório')
}

for (field of fields) {
    field.addEventListener('invalid', customValidation);
}
















document.querySelector('form').addEventListener('submit', (event) => {
    console.log('enviar formulario')
    event.preventDefault();
});