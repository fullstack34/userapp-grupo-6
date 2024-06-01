const elements = {
    inputEmail: document.getElementById('input-email'),
    inputPassword: document.getElementById('input-password'),
    formLogin: document.getElementById('loginForm'),
    emailError: document.getElementById('email-error'),
    passwordError: document.getElementById('password-error'),
};

// Função para mostrar erros
function showError(element, msg) {
    element.textContent = msg;
}

// Função para validar o formato do e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Listener para o evento de submit do formulário
elements.formLogin.addEventListener('submit', function(event) {
    let isValid = true;

    // Resetando mensagens de erro
    showError(elements.emailError, '');
    showError(elements.passwordError, '');

    // Validação de email
    if (!elements.inputEmail.value.trim()) {
        showError(elements.emailError, 'Campo obrigatório.');
        isValid = false;
    } else if (!validateEmail(elements.inputEmail.value.trim())) {
        showError(elements.emailError, 'Por favor, insira um endereço de e-mail válido.');
        isValid = false;
    }

    // Validação de password
    if (!elements.inputPassword.value.trim()) {
        showError(elements.passwordError, 'Campo obrigatório.');
        isValid = false;
    }

    // Se não for válido, previne o envio do formulário
    if (!isValid) {
        event.preventDefault();
    }
});
