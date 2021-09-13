import React from "react";
class Header extends React.Component {
    render() {
        return (
            <div className="todo-header">
                <input
                    type="text"
                    placeholder="请输入你的任务名称，按回车健确定"
                />
            </div>
        )
    }   
}
export default Header
