import React from "react";
class Item extends React.Component {
    render() {
        const {id, name, done} = this.props
        return (
            <li>
                <label>
                    <input type="checkbox" checked={done} />
                    <span>{ name }</span>
                </label>
                <button
                    className="btn btn-danger"
                    style={{
                        display: 'none'
                    }}
                >
                    删除
                </button>
            </li>
        )
    }
}
export default Item
