import React from "react";
import { ListContainer, TodoListContainer } from "./styles";
// import { Itasks } from "./types";
import InputTask from "../InputTasks/InputTask";
import Checkbox from "../Checkbox/Checkbox";





const ListView = () => {

  return(<>
    <ListContainer>
      <TodoListContainer>
      <Checkbox title='tarefa 1'/>
      <Checkbox title='tarefa 2'/>
      <Checkbox title='tarefa 3'/>
      </TodoListContainer>
    </ListContainer>
  </>)
}

export default ListView