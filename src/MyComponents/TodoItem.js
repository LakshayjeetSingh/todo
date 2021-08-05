import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    let cardStyle = {
        backgroundColor: "#014f86",
        border: "white solid",
    }
    return (
        <>
            <div className="card text-white my-3" style={cardStyle}>
                <span className="card-header d-flex justify-content-between">
                    <h4 className="card-title  d-inline">{todo.title}</h4>
                    <p className=" text-mid d-inline ">Due Date : {todo.date}, {todo.Time}</p>
                </span>
                <div className="card-body">
                    <p className="card-text">{todo.desc}</p>
                </div>
                <div className="card-footer text-end">
                    <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
                </div>
            </div>
        </>
    )
}
