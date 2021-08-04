import React from 'react'
import { useState } from 'react';
export const AddTodo = (props) => {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const [Date, setDate] = useState("");
    const append = (e) => {
        e.preventDefault();
        if (!Title || !Desc)
            alert("Title or Description of a Todo cannot be empty");
        else {
            props.addTodo(Title, Desc, Date)
            setTitle("");
            setDesc("");
            setDate("");
        }
    }
    return (
        <div className="container my-3">
            <h4 className="text-center">Add What To do</h4>
            <form onSubmit={append}>
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Title</label>
                    <input type="text" value={Title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="todoTitle" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDesc" className="form-label">Description</label>
                    <input type="text" value={Desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="todoDesc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="dueDate" className="form-label">Due Date</label>
                    <input type="Date" value={Date} onChange={(e) => { setDate(e.target.value) }} className="form-control" id="todoDesc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add</button>
            </form>
        </div>
    )
}
