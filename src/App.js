
import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About'
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("Deleting todo", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))



  }


  const addTodo = (Title, Desc, Date, Time) => {
    console.log("Adding todo to List", Title, Desc, Date, Time);
    let sno
    if (todos.length === 0)
      sno = 1;
    else
      sno = todos[todos.length - 1].sno + 1;
    const myTodo = {
      sno: sno,
      title: Title,
      desc: Desc,
      date: Date,
      Time: Time,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  useEffect(() => { document.body.style.backgroundColor = "#cdb4db" }, [])

  return (
    <>
      <Router>
        <Header title="Todos List" searchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos Todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
