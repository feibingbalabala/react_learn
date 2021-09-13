import React from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
import './index.css'

class TodoList extends React.Component {
    render() {
        return (
            <div className="todo-box">
                <Header />
                <List />
                <Footer />
            </div>
        )
    }
}
export default TodoList
