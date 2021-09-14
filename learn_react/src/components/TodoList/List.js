import React from "react";
import Item from "./Item";
class List extends React.Component {
    render() {
        const { todos } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => <Item key={todo.id } {...todo} />)
                }
            </ul>
        )
    }
}
export default List
