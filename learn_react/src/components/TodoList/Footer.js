import React from "react";
class Footer extends React.Component {
    
    checkAllTodo = (e) => {
        this.props.checkAllTodo(e.target.checked)
    }

    handleClearAllDone = () => {
        if (window.confirm('确认清除已经完成的任务')) {
            this.props.handleClearAllDone()
        }
    }
    
    render() {
        const { todos } = this.props

        const doneCount = todos.reduce((pre, current) => {
            if (current.done) {
                return pre + 1
            } else {
                return pre
            }
        }, 0)

        const total = todos.length

       
        return (
            <div className="todo-footer">
                <label>
                    <input
                        type="checkbox"
                        checked={doneCount === total && total !== 0}
                        onChange={this.checkAllTodo}
                    />
                </label>
                <span>
                    <span>已完成{ doneCount }</span> / 全部{ total }
                </span>
                <button
                    className="btn btn-danger"
                    onClick={this.handleClearAllDone}
                >
                    清除已经完成的任务
                </button>
            </div>
        )
    }
}
export default Footer
