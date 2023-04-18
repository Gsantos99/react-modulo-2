import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import { Itasks } from '../ListView/types'


const InputTask = () => {
 
const [newTask, setNewTask] = useState('')
const [listOfTasks, setListOfTasks ] = useState<Itasks[]>([])
 
  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
   setNewTask(event.target.value)
  //  console.log(newTask)
  }

  const handleKeyPressNewTask = (event: KeyboardEvent<HTMLInputElement>) => {
   if(event.key === 'Enter' && newTask !== '') {
    console.log(newTask)
    setNewTask('')
   }
  }
   
  return (<>
    <input type="text" value={newTask}   onChange={handleNewTask} onKeyDown={handleKeyPressNewTask} />
    </>)
}

export default InputTask