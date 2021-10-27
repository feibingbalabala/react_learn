import React from "react";
import './index.css'

const MyContext = React.createContext();

class Context extends React.Component {
    state = {username: 'parent'}
    render() {
        return (
            <div className="parent">
                <h2>parent</h2>
                <p>我的用户名是：{this.state.username}</p>
                <MyContext.Provider value={{username: this.state.username}}>
                    <B />
                </MyContext.Provider>
            </div>
        )
    }
}

class B extends React.Component {
    render() {
        return (
            <div className="child">
                <h2>child</h2>
                {/* <p>我的父组件的用户名：1</p> */}
                <C />
            </div>
        )
    }
}

// 类式组件
// class C extends React.Component {
//     // 申明接受context
//     static contextType = MyContext
//     render() {
//         return (
//             <div className="grade">
//                 <h2>grade</h2>
//                 <p>我的爷组件的用户名：{this.context.username}</p>
//             </div>
//         )
//     }
// }
// 函数式组件
function C() {
    return (
        <div className="grade">
            <h2>grade</h2>
            <p>我的爷组件的用户名：
                <MyContext.Consumer>
                    {
                        (value) => {
                            return `${value.username}`
                        }
                    }
                </MyContext.Consumer>
            </p>
        </div>
    )
}

export default Context;
