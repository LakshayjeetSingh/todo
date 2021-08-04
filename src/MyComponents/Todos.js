import React from 'react'
import { TodoItem } from './TodoItem';
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todo List</h3>
            {props.Todos.length === 0 ? "Nothing is to be Done, Take some rest." :
                props.Todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                })
            }
        </div>
    )
}
