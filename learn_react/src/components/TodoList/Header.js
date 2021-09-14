import React from "react";

import PropTypes from 'prop-types'
class Header extends React.Component {

    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyup = (e) => {
        if (e.keyCode !== 13) {
            return
        }
        if (e.target.value.trim() === '') {
            alert('输入不能为空')
            return
        }
        const todoObj = {
            id: new Date().getTime(),
            name: e.target.value,
            done: false
        }
        this.props.addTodo(todoObj)
        e.target.value = ''
    }

    render() {
        return (
            <div className="todo-header">
                <input
                    onKeyUp={this.handleKeyup}
                    type="text"
                    placeholder="请输入你的任务名称，按回车健确定"
                />
            </div>
        )
    }   
}
export default Header
