import React, { useState, useContext } from 'react';
import { TextField, FormControlLabel, Switch, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha });
        }
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        name="email"
        required
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="senha"
        label="senha"
        type="password"
        name="senha"
        required
        onChange={(e) => setSenha(e.target.value)}
        onBlur={(e) => validarCampos(e)}
        value={senha}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}
export default DadosUsuario;
