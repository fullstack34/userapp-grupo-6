    const elements = {
        inputEmail: document.getElementById('input-email'),
        inputPassword: document.getElementById('input-password'),
        confirmPassword: document.getElementById('confirm-password'),
        formLogin: document.getElementById('loginForm'),
        emailError: document.getElementById('email-error'),
        passwordError: document.getElementById('password-error'),
        confirmPasswordError: document.getElementById('confirm-password-error'),
    };

    // Função para mostrar erros em vermelho
    function showError(element, msg) {
        element.textContent = msg;
        element.style.color = 'red'; // Adiciona cor vermelha ao erro
    }

    // Função para limpar erros
    function clearError(element) {
        element.textContent = '';
    }

    // Função para validar o formato do e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Listener para o evento de submit do formulário
    elements.formLogin.addEventListener('submit', function (event) {
        let isValid = true;

        // Resetando mensagens de erro
        clearError(elements.emailError);
        clearError(elements.passwordError);
        clearError(elements.confirmPasswordError);

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
        if (!elements.inputPassword.value.trim()) {
            showError(elements.confirmPasswordError, 'Campo obrigatório.');
            isValid = false;
        }

        // Validação de confirmação de senha
        if (!elements.confirmPassword.value.trim()) {
            showError(elements.passwordError, 'Campo obrigatório.');
            isValid = false;
        } else if (elements.inputPassword.value !== elements.confirmPassword.value) {
            showError(elements.passwordError, 'As senhas não coincidem.');
            isValid = false;
        }
        if (!elements.confirmPassword.value.trim()) {
            showError(elements.confirmPasswordError, 'Campo obrigatório.');
            isValid = false;
        } else if (elements.inputPassword.value !== elements.confirmPassword.value) {
            showError(elements.confirmPasswordError, 'As senhas não coincidem.');
            isValid = false;
        }

        // Se não for válido, previne o envio do formulário
        if (!isValid) {
            event.preventDefault();
        }
    });

