import React, { useState, useContext } from 'react';
import { TextField, FormControlLabel, Switch, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function FormularioCadastro({ aoEnviar }) {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
        }
      }}
    >
      <TextField
        value={nome}
        onChange={(e) => {
          setNome(e.target.value);
        }}
        onBlur={(e) => {
          validarCampos(e);
        }}
        type="text"
        label="Nome"
        id="nome"
        name="nome"
        required
        error={!erros.nome.valido}
        helperText={erros.nome.texto}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(e) => {
          setSobrenome(e.target.value);
        }}
        type="text"
        label="Sobrenome"
        id="sobrenome"
        name="sobrenome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(e) => {
          setCpf(e.target.value);
        }}
        onBlur={(e) => {
          validarCampos(e);
        }}
        type="text"
        label="CPF"
        id="CPF"
        name="cpf"
        required
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            onChange={(e) => {
              setPromocoes(e.target.checked);
            }}
            name="promoções"
            color="primary"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            onChange={(e) => {
              setNovidades(e.target.checked);
            }}
            name="novidades"
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}
export default FormularioCadastro;
