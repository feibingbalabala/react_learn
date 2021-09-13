import React from "react";
class Footer extends React.Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>已完成0</span> / 全部2
                </span>
                <button className="btn btn-danger">清除已经完成的任务</button>
            </div>
        )
    }
}
export default Footer
