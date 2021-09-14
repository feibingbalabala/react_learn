import React from "react";
class Item extends React.Component {
    state = {
        mouse: false
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({
                mouse: flag
            })
        }
    }

    handleCheck = (id) => {
        return (e) => {
            this.props.updateTodo(id, e.target.checked)
        }
    }

    handleDelete = (id) => {
        if (window.confirm('确认删除?')) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done} = this.props
        return (
            <li
                style={{
                    backgroundColor: this.state.mouse ? '#ddd' : ''
                }}
                onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}
            >
                <label>
                    <input
                        type="checkbox"
                        checked={done}
                        onChange={this.handleCheck(id)}
                    />
                    <span>{ name }</span>
                </label>
                <button
                    className="btn btn-danger"
                    style={{
                        display: this.state.mouse ? '' : 'none'
                    }}
                    onClick={() => { this.handleDelete(id) }}
                >
                    删除
                </button>
            </li>
        )
    }
}
export default Item
