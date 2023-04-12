import React from "react";
import { ListContainer, TodoListContainer, TodoListItem } from "./Listview.styles";
import { Itasks } from "./Listview.types";
import StyledWrapper from "../Wrapper/Wrapper";
import Checkbox from "../Checkbox/Checkbox";
import Spacer from "../Spacer/Spacer";




const ListView = () => {

  const task: Itasks[] = [{id: '1', label:'Primeira task', isComplete:false}, {id: '2', label:'Primeira task', isComplete:false}, {id: '3', label:'Primeira task', isComplete:false}]

  return(<>
    <ListContainer>
      <TodoListContainer>

       <StyledWrapper width="300px" height="auto">
          <h2>Componente Checkbox</h2>
         <Checkbox  />
       </StyledWrapper>

       <Spacer width="1rem" height="1rem"/>
       
       <StyledWrapper width="300px" height="auto">
          <h2>Componente Spacer</h2>
       <h2>Titulo</h2>
       <Spacer width="1rem" height="1rem"/>
       <div>Esse texto está sendo separado pelo componente Spacer</div>
       </StyledWrapper>

      </TodoListContainer>
    </ListContainer>
  </>)
}

export default ListView