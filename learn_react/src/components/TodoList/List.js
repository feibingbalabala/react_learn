import React from "react";
import Item from "./Item";
class List extends React.Component {
    render() {
        return (
            <ul className="todo-main">
                <Item />
            </ul>
        )
    }
}
export default List
