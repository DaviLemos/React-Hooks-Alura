export function validarCPF(cpf) {
  return cpf.length === 11
    ? { valido: true, texto: '' }
    : { valido: false, texto: 'CPF deve ter 11 dígitos.' };
}

export function validarSenha(senha) {
  return senha.length >= 4 && senha.length < 72
    ? { valido: true, texto: '' }
    : { valido: false, texto: 'Senha deve ter 4 e 72 dígitos.' };
}
