const $btnSignIn= document.querySelector('.sign-in-btn'),
    $btnSignUp = document.querySelector('.sign-up-btn'),  
    $signUp = document.querySelector('.sign-up'),
    $signIn  = document.querySelector('.sign-in');

const nombre = document.getElementById("nombre")
const email = document.getElementById("Registroemail")
const password = document.getElementById("password")
const confpassword = document.getElementById("confpassword")
const form = document.getElementById("formulario")

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active')
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
    });

function validarFormulario(evento) {
    evento.preventDefault();
    if (password.value != confpassword.value){
        alert('Las contraseñas no coinciden')
        return;
    }
    this.submit();
}