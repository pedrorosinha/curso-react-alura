import React, { useState } from 'react';
import Form from '../components/form';
import List from '../components/list';
import style from './App.module.scss';
import Timer from '../components/timer';
import { ITarefa } from '../types/tarefa';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionaTarefa(tarefaSelecionado: ITarefa) {
    setSelecionado(tarefaSelecionado);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionado.id ? true : false
    })))
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <List
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
       />
      <Timer/>
    </div>
  );
}

export default App;
