import React, {useState} from 'react'

function try() {
    const [todos, setTodos] = useState([]
    
    )
    cons [newTodo, setNewTodo] = useState('')


    const addTodo = ()=> {
        if(newTodo.trim() === "") return
        setTodos([...todos, {text: newTodo, completed: false}])
        setNewTodo("")
    }

    const toggleComplete = (index) => {
        const updatedTodos = todos.map((todo, i) => {
            if (i === index) {
                todo.completed = !todo.completed
            }
            return todo
        })
        setTodos(updatedTodos)
    }
  return (
    <div>try</div>
  )
}

export default try