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
    render() {
        return (
            <div className="todo-box">
                <div className="todo-wrap">
                    <Header
                        addTodo={this.addTodo}
                    />
                    <List  todos ={this.state.todos} />
                    <Footer />
                </div>
            </div>
        )
    }
}
export default TodoList
