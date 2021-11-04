import React, { useState } from 'react';
import { TextField, FormControlLabel, Switch, Button } from '@material-ui/core';

function DadosEntrega({ aoEnviar }) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        aoEnviar({ cep, endereco, numero, estado, cidade });
      }}
    >
      <TextField
        id="cep"
        label="CEP"
        type="number"
        required
        onChange={(e) => setCep(e.target.value)}
        value={cep}
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereço"
        label="Endereço"
        type="text"
        required
        onChange={(e) => setEndereco(e.target.value)}
        value={endereco}
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="numero"
        label="Numero"
        type="number"
        name="numero"
        required
        onChange={(e) => setNumero(e.target.value)}
        value={numero}
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="estado"
        label="Estado"
        type="text"
        name="estado"
        required
        onChange={(e) => setEstado(e.target.value)}
        value={estado}
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="cidade"
        label="Cidade"
        type="text"
        name="cidade"
        required
        onChange={(e) => setCidade(e.target.value)}
        value={cidade}
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}
export default DadosEntrega;
