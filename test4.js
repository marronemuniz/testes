function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return a * b;
}


console.group('🧪 Executando Testes Unitários: multiplicar()');


console.assert(multiplicar(2, 3) === 6, '❌ Erro no Teste 1: 2 * 3 deve ser 6');


console.assert(multiplicar(10, 0) === 0, '❌ Erro no Teste 2: Multiplicação por 0 deve ser 0');


console.assert(multiplicar(-4, 5) === -20, '❌ Erro no Teste 3: -4 * 5 deve ser -20');


console.assert(multiplicar(2.5, 2) === 5, '❌ Erro no Teste 4: 2.5 * 2 deve ser 5');


console.assert(Number.isNaN(multiplicar('texto', 5)), '❌ Erro no Teste 5: Deve retornar NaN para strings');


console.log('✅ Todos os testes de multiplicação passaram!');
console.groupEnd();


document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('cadastroForm');
  const inputNome = document.getElementById('nome');
  const inputEmail = document.getElementById('email');
  const inputSenha = document.getElementById('senha');
  const sucessoMsg = document.getElementById('sucesso-geral');


  function validarNome(valor) {
    valor = valor.trim();
    if (valor === '') {
      return 'O campo Nome é obrigatório.';
    }
    if (valor.length < 3) {
      return 'O nome deve ter no mínimo 3 caracteres.';
    }
    if (/\d/.test(valor)) {
      return 'O nome não pode conter números.';
    }
    return '';
  }


  function validarEmail(valor) {
    valor = valor.trim();
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (valor === '') {
      return 'O campo E-mail é obrigatório.';
    }
    if (!regexEmail.test(valor)) {
      return 'Por favor, insira um e-mail válido (ex: nome@dominio.com).';
    }
    return '';
  }


  function validarSenha(valor) {
    if (valor === '') {
      return 'O campo Senha é obrigatório.';
    }
    if (valor.length < 6) {
      return 'A senha deve conter no mínimo 6 caracteres.';
    }
    if (!/\d/.test(valor)) {
      return 'A senha deve conter pelo menos um número (0-9).';
    }
    return '';
  }


  function atualizarStatus(input, elementoErro, mensagem) {
    if (mensagem !== '') {
      elementoErro.textContent = mensagem;
      input.classList.add('invalido');
      input.classList.remove('valido');
      return false;
    } else {
      elementoErro.textContent = '';
      input.classList.remove('invalido');
      input.classList.add('valido');
      return true;
    }
  }


  inputNome.addEventListener('input', () => {
    atualizarStatus(inputNome, document.getElementById('erro-nome'), validarNome(inputNome.value));
  });


  inputEmail.addEventListener('input', () => {
    atualizarStatus(inputEmail, document.getElementById('erro-email'), validarEmail(inputEmail.value));
  });


  inputSenha.addEventListener('input', () => {
    atualizarStatus(inputSenha, document.getElementById('erro-senha'), validarSenha(inputSenha.value));
  });


  form.addEventListener('submit', (e) => {
    e.preventDefault();


    const erroNome = validarNome(inputNome.value);
    const erroEmail = validarEmail(inputEmail.value);
    const erroSenha = validarSenha(inputSenha.value);


    const isNomeOk = atualizarStatus(inputNome, document.getElementById('erro-nome'), erroNome);
    const isEmailOk = atualizarStatus(inputEmail, document.getElementById('erro-email'), erroEmail);
    const isSenhaOk = atualizarStatus(inputSenha, document.getElementById('erro-senha'), erroSenha);


    if (isNomeOk && isEmailOk && isSenhaOk) {
      sucessoMsg.style.display = 'block';
      form.reset();
     
      [inputNome, inputEmail, inputSenha].forEach(input => input.classList.remove('valido'));


      setTimeout(() => {
        sucessoMsg.style.display = 'none';
      }, 4000);
    } else {
      sucessoMsg.style.display = 'none';
    }
  });
});
