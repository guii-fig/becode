// Seleciona os botões
const btnEntrar = document.getElementById('login');
const btnCriar = document.getElementById('create-account');

// Seleciona os formulários
const formEntrar = document.getElementById('form-login');
const formCriar = document.getElementById('form-create');
const formContainer = document.getElementById('forms');

// Ação ao clicar em "Entrar"
btnEntrar.addEventListener('click', () => {
  // Atualiza os botões
  btnEntrar.classList.add('ativo');
  btnCriar.classList.remove('ativo');
  
  // Atualiza os formulários
  formEntrar.classList.add('ativo');
  formCriar.classList.remove('ativo');
  formContainer.classList.remove('ativo');
});

// Ação ao clicar em "Criar conta"
btnCriar.addEventListener('click', () => {
  // Atualiza os botões
  btnCriar.classList.add('ativo');
  btnEntrar.classList.remove('ativo');
  
  // Atualiza os formulários
  formCriar.classList.add('ativo');
  formEntrar.classList.remove('ativo');
  formContainer.classList.add('ativo');
});