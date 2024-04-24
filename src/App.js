import logo from "./logo.svg";
import "./App.css";
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";
import { AddTodo } from "./Mycomponents/AddTodo";
// import { About } from "./Mycomponents/About";
import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router,  
//  Route 
// } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    // console.log("I am on delete off todo", todo);

    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splices(index,1);

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    // console.log("Now currently, I am adding this todo", title, desc);

    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, mytodo]);
    // console.log(mytodo);
  };

  const [todos, setTodos] = useState(
    initTodo
    // {
    //   sno: 1,
    //   title: "Someone go to the market",
    //   desc: "You need a Ice cream to go the market, To get this Ice Cream",
    // },

    // {
    //   sno: 2,
    //   title: "Sonu will you sing a song",
    //   desc: "Yes sir which song are you like",
    // },

    // {
    //   sno: 3,
    //   title: "whom are coming to the mall",
    //   desc: "Rahul, Nitin, Abhijeet are want to coming to the mall",
    // },

    // {
    //   sno: 4,
    //   title: "Go to the ganga Aarti",
    //   desc: "You need go the ganga ghat and attend the evening aarti",
    // },

    // {
    //   sno: 5,
    //   title: "Everyday i am running",
    //   desc: "Sure, Which time you go for running, Morning or evening ",
    // },
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      
        <Header title="My TodosList Now Working" searchBar={false} />
        <AddTodo addTodo={addTodo} />
        <Todos todos={todos} onDelete={onDelete} />
        <Footer/>
    </>
  );
}

export default App;
