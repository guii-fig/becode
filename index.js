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

//cria o usuário

const users = JSON.parse(localStorage.getItem('users') || '[]');

document.getElementById('btn-create').addEventListener('click', e => {
  e.preventDefault();

  const bssName = document.getElementById('bss-name').value.trim();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if(!bssName || !name || !email || !password) {
    alert('Preencha todos os campos!');
    return;
  }

  const user = {bssName, name, email, password};
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  alert('Conta criada com sucesso!');
});

//valida o usuário

document.getElementById('btn-login').addEventListener('click', e => {
  e.preventDefault();

  const loginEmail = document.getElementById('email-login').value.trim();
  const loginPassword = document.getElementById('password-login').value;

  const existe = users.some(usuario => usuario.email === loginEmail && usuario.password === loginPassword);
  if(existe) {
    window.location.href = 'home.html';
  }
  else {
    alert('Usuário inválido! Verifique as informações de login e tente novamente');
  }
});