import React from "react";
import PropTypes from 'prop-types'
import Item from "./Item";
class List extends React.Component {
    
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateTodo: PropTypes.func.isRequired
    }

    render() {
        const { todos, updateTodo } = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item
                            key={todo.id }
                            {...todo}
                            updateTodo={updateTodo}
                        />
                    })
                }
            </ul>
        )
    }
}
export default List
