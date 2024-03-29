import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { AddTodoButton } from "../AddTodoButton";
import { TodosLoading } from "../TodosLoading";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import { TodoContext } from "../TodoContext";
import "./AppUI.css";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    addTodo,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <>
      <section>
        {loading && <TodosLoading />}
        {error && <p>"localStorage isn't working"</p>}
        {!loading && !error && (
          <div className="app-container">
            <div className="list-header">
              <h1>TO DO List</h1>
              <TodoCounter />
              <TodoSearch />
            </div>

            <TodoList>
              {searchedTodos.map((todo, index) => (
                <TodoItem
                  key={index}
                  task={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(index)}
                  onDelete={() => deleteTodo(index)}
                />
              ))}
            </TodoList>

            <div className="button-container">
              <AddTodoButton setOpenModal={setOpenModal} />
            </div>

            {openModal && (
              <Modal>
                <TodoForm />
              </Modal>
            )}
          </div>
        )}
      </section>
      <footer>By: Andrés Ortega</footer>
    </>
  );
}

export { AppUI };
