import React from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import './index.css'

class TodoList extends React.Component {
    state = {
        todos: [
            {
                id: '001',
                name: '吃饭',
                done: true
            },
            {
                id: '002',
                name: '睡觉',
                done: true
            },
            {
                id: '003',
                name: '写作业',
                done: false
            }
        ]
    }
    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]
        this.setState({
            todos: newTodos
        })
    }

    updateTodo = (id, done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return {...todoObj, done}
            } else {
                return todoObj
            }
        })
        this.setState({
            todos: newTodos
        })
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        this.setState({
            todos: newTodos
        })
    }

    checkAllTodo = (done) => {
        const { todos } = this.state
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done}
        })
        this.setState({
            todos: newTodos
        })
    }

    handleClearAllDone = () => {
        const { todos } = this.state
        const newTodos = todos.filter((item) => !item.done)
        this.setState({
            todos: newTodos
        })
    }

    render() {
        return (
            <div className="todo-box">
                <div className="todo-wrap">
                    <Header
                        addTodo={this.addTodo}
                    />
                    <List 
                        todos={this.state.todos}
                        updateTodo={this.updateTodo}
                        deleteTodo={this.deleteTodo}
                    />
                    <Footer
                        todos={this.state.todos}
                        checkAllTodo={this.checkAllTodo}
                        handleClearAllDone={this.handleClearAllDone}
                    />
                </div>
            </div>
        )
    }
}
export default TodoList
