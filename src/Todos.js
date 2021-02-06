import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
         return (
            <div className="todo collection-item center" key={todo.id}>
                <span > {todo.content} <a onClick={() => {deleteTodo(todo.id)}}><i className="tiny material-icons">clear</i></a></span>
            </div>
         ) 
            
        })
    ) : 
    (
        <p className="todos center"> You don't have any more todos congrats</p>
    )

    return (
        <div className="collection">
            {todoList}
        </div>
    )
}

export default Todos;