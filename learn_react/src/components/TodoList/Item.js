import React from "react";
class Item extends React.Component {
    render() {
        return (
            <li>
                <label>
                    <input type="checkbox" />
                    <span>xxx</span>
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
