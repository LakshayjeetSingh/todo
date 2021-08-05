import React from 'react'
import { useState } from 'react';
export const AddTodo = (props) => {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("");
    const [Date, setDate] = useState("");
    const [Time, setTime] = useState("");
    const append = (e) => {
        e.preventDefault();
        if (!Title || !Desc)
            alert("Title or Description of a Todo cannot be empty");
        else {
            props.addTodo(Title, Desc, Date, Time)
            setTitle("");
            setDesc("");
            setDate("");
            setTime("");
        }
    }
    let cardStyle = {
        backgroundColor: "#1d3557",
        border: "white solid",
    }
    return (
        <div className="container my-3">

            <h4 className="text-center">Add What To do</h4>

            <form className="card " onSubmit={append} style={cardStyle}>
                <div className="mb-3">
                    <div className="form-floating mx-3 my-3">
                        <input type="text" value={Title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="todoTitle" aria-describedby="emailHelp" placeholder="a" />
                        <label htmlFor="todoTitle" >Title</label>
                    </div>
                    <div className="form-floating mx-3 mb-3">
                        <input type="text" value={Desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="todoDesc" placeholder="a" />
                        <label htmlFor="todoDesc" className="form-label">Description</label>
                    </div>
                    <div className="text-white d-flex justify-content-start">
                        <span className="d-flex flex-row mx-3">
                            <label htmlFor="dueDate" className="align-self-center  form-label">Due Date</label>
                            <input type="Date" value={Date} onChange={(e) => { setDate(e.target.value) }} className="form-control" id="Date" />
                        </span>
                        <span className="d-flex flex-row mx-3">
                            <label htmlFor="Time" className="form-label align-self-center mx-3">Time </label>
                            <input type="Time" value={Time} onChange={(e) => { setTime(e.target.value) }} className="form-control" id="Time" />
                        </span>
                        <button type="submit" className="btn btn-sm btn-success mx-3 ms-auto p-2">Add</button>
                    </div>
                </div>

            </form>
        </div>
    )
}
