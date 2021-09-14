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
                >
                    删除
                </button>
            </li>
        )
    }
}
export default Item
