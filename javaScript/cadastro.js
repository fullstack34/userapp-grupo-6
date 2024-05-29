document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpa mensagens de erro
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(function(element) {
        element.textContent = '';
    });

    // Pega valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmar-senha').value.trim();

    // Variável de controle para validar o formulário
    let formIsValid = true;

    // Verificação dos campos obrigatórios
    if (!nome) {
        document.getElementById('nomeError').textContent = 'Campo obrigatório.';
        formIsValid = false;
    }
    if (!sobrenome) {
        document.getElementById('sobrenomeError').textContent = 'Campo obrigatório.';
        formIsValid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'Campo obrigatório.';
        formIsValid = false;
    } else if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Por favor, insira um endereço de e-mail válido.';
        formIsValid = false;
    }
    if (!senha) {
        document.getElementById('senhaError').textContent = 'Campo obrigatório.';
        formIsValid = false;
    }
    if (!confirmarSenha) {
        document.getElementById('confirmarSenhaError').textContent = 'Campo obrigatório.';
        formIsValid = false;
    } else if (senha !== confirmarSenha) {
        document.getElementById('confirmarSenhaError').textContent = 'As senhas não coincidem.';
        formIsValid = false;
    }

    // Se o formulário for válido, redireciona para a página de login
    if (formIsValid) {
        window.location.href = 'login.html';
    }
});

// Função para validar e-mail
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
