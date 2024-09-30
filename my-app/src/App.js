import React, { useState } from 'react';
import './App.css';
import FormularioTarefa from './components/FormularioTarefa';
import ListaTarefas from './components/ListaTarefas';

const maxTarefas = 10;

function App() {
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (novaTarefa) => {
    if (tarefas.length < maxTarefas) {
      setTarefas([...tarefas, novaTarefa]);
    } else {
      alert('Número máximo de tarefas atingido');
    }
  };

  const alternarStatus = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index].completa = !novasTarefas[index].completa;
    setTarefas(novasTarefas);
  };

  const removerTarefa = (index) => {
    const novasTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novasTarefas);
  };

  const editarTarefa = (index, tarefaAtualizada) => {
    const novasTarefas = [...tarefas];
    novasTarefas[index] = tarefaAtualizada;
    setTarefas(novasTarefas);
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <FormularioTarefa onAdicionarTarefa={adicionarTarefa} />
      <ListaTarefas
        tarefas={tarefas}
        onAlternarStatus={alternarStatus}
        onRemoverTarefa={removerTarefa}
        onEditarTarefa={editarTarefa}
      />
    </div>
  );
}

export default App;
