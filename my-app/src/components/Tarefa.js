import React from 'react';
import { MdCheck, MdUndo, MdEdit, MdDelete } from 'react-icons/md';
import Card from './Card';

function Tarefa({ tarefa, index, onAlternarStatus, onRemoverTarefa, onEditarTarefa }) {
  return (
    <Card>
      <div className={`tarefa prioridade-${tarefa.prioridade}`}>
        <span className={tarefa.completa ? 'completa' : ''}>
          {tarefa.descricao} (Responsável: {tarefa.responsavel}, Prazo: {tarefa.prazo}, Prioridade: {tarefa.prioridade})
        </span>
        <div className="botoes">
          <button onClick={() => onAlternarStatus(index)}>
            {tarefa.completa ? <MdUndo /> : <MdCheck />}
          </button>
          <button onClick={() => onEditarTarefa(index, tarefa)}>
            <MdEdit />
          </button>
          <button onClick={() => onRemoverTarefa(index)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </Card>
  );
}

export default Tarefa;
